const { review } = require('../models');
const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    const params = req.params.id;
    console.log(params);
    review.findAll({ where: { itemId: params } })
      .then(el => res.status(200).json({ data: el, message: 'ok' }));
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
        res.json({ data: result, message: 'Success Delete Review' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
// patch 해야함
// review /get 했을때 fk 잘 불려와지는지 확인 ex)user_id , item_id 정보들이 잘 불려와 지는지
