const { user } = require('../models');
const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    const token = req.cookies.accessToken;
    console.log(req.cookies.refreshToken)
    const data = verify(token, process.env.ACCESS_SECRET, (err, result) => {
      if (err) {
        return null;
      } else {
        return result;
      }
    });
    const userInfo = await user.findAll({ where: { email: data.email } });
    if (!userInfo) {
      res.status(400).json({ data: null, message: 'not Date' });
    } else {
      res.status(200).json({ data: userInfo, message: 'Found User' });
    }
  },
  patch: async (req, res) => {
    const { nickname, password } = req.body;
    if (!nickname && !password) {
      res.status(400).send('Please send patch data');
    }

    const patchValues = {};
    if (nickname) {
      patchValues.nickname = nickname;
    }
    if (password) {
      patchValues.password = password;
    }

    const token = req.cookies.accessToken;
    const data = verify(token, process.env.ACCESS_SECRET, (err, result) => {
      if (err) {
        return null;
      } else {
        return result;
      }
    });

    user.update(patchValues, { where: { email: data.email } })
      .then(([affectedRows]) => {
        if (!affectedRows) {
          res.status(400).send('Not Change');
        } else {
          console.log('=============user 수정 완료================');
          res.status(200).send('Success User Patch');
        }
      }).catch(err => res.status(400).send(err));
  }
};
// patch 해야함
/*
get: async (req, res) => {
  const userid = req.params.userid;

  const userreviews = await reviews.findAll({
    where: { user_id: userid }
  });
  // [{}, {}, {}]
  if(!userreviews){
    res.status(400).json(data: null, message: "there is no review")
  }
  else {
    let data = []
    for (let userreview of userreviews.dataValues) {
      let { id, user_id, item_id, score, content, createdAt, updatedAt } = userreview;
      let iteminfo = await items.findOne({
        where: { id : item_id}
      });
      let { name, img, cost } = iteminfo.dataValues
      let userInfo = await users.findOne({
        where: { id : user_id }
      })
      let nickname = userInfo.dataValues.nickname
      let payload = {id, nickname, name, img, cost, score, content, createdAt}
      data.push(payload)
    }
    res.status(200).json({data: data, message: 'ok'})

  }

},
*/
