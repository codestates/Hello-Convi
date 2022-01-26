const { user, item, review } = require('../models');
const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    const { itemid, userid } = req.query;
    if (itemid) {
      item.findAll({
        where: { id: itemid },
        include: [{
          model: review,
          required: true,
          include: [{
            model: user, required: true
          }]
        }
        ]
      })
        .then(el => {
          const result = [];

          el.map((ele) => {
            return ele.reviews.map((elel) => {
              const payload = {
                price: ele.price,
                photo: ele.img,
                name: ele.name,
                userid: elel.user.id,
                score: elel.score,
                itemcontent: ele.content,
                reviewcontent: elel.content,
                createdAt: elel.createdAt,
                updatedAt: elel.updatedAt,
                nickname: elel.user.nickname,
                email: elel.user.email
              };
              return result.push(payload);
            });
          });

          res.status(200).json({ data: result, message: 'ok' });
        });
    } else if (userid) {
      user.findAll({
        where: { id: userid },
        include: [{
          model: review,
          required: true,
          order: [['createdAt', 'DESC']],
          include: [{
            model: item, required: true
          }]
        }
        ]
      })
        .then(el => {
          const element = el[0];
          const result = [];
          if (element.reviews.length === 0) {
            res.status(200).json({ data: null, message: 'empty review' });
          } else {
            for (const ele of element.reviews) {
              const payload = {
                itemid: ele.item.id,
                itemname: ele.item.name,
                price: ele.item.price,
                content: ele.item.content,
                photo: ele.item.img,
                review: {
                  reviewid: ele.id,
                  nickname: element.nickname,
                  content: ele.content,
                  score: ele.score
                }
              };
              result.push(payload);
            }

            res.status(200).json({ data: result, message: 'ok' });
          }
        });
    }
  },
  post: (req, res) => {
    const { userId, itemId, score, content } = req.body;
    if (!score || !content) {
      res.status(422).send('blanks exist');
    } else {
      review.create({
        userId,
        itemId,
        score,
        content
      })
        .then(result => {
          console.log('===============review 추가완료===============');
          res.status(200).json({ data: null, message: 'ok' });
        }).catch(err => console.log(err));
    }
  },
  patch: async (req, res) => {
    const { score, content } = req.body;
    if (!score && !content) {
      res.status(400).send('Please send patch data');
    }

    const patchValues = {};
    if (score) {
      patchValues.score = score;
    }
    if (content) {
      patchValues.content = content;
    }

    const token = req.cookies.accessToken;
    const data = verify(token, process.env.ACCESS_SECRET, (err, result) => {
      if (err) {
        return null;
      } else {
        return result;
      }
    });

    review.update(patchValues, { where: { userId: data.id } })
      .then(([affectedRows]) => {
        if (!affectedRows) {
          res.status(400).send('Not Change');
        } else {
          console.log('=============review 수정 완료================');
          res.status(200).send('Success Review Patch');
        }
      }).catch(err => console.log(err));
  },
  delete: (req, res) => {
    review.destroy({ where: { id: req.params.id } })
      .then((result) => {
        console.log('=============review 삭제 완료================');
        res.json({ data: result, message: 'Success Delete Review' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
// patch 해야함
// review /get 했을때 fk 잘 불려와지는지 확인 ex)user_id , item_id 정보들이 잘 불려와 지는지
