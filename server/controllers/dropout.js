const { user, review } = require('../models');
const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res) => {
  const token = req.cookies.accessToken;
  const data = verify(token, process.env.ACCESS_SECRET, (err, result) => {
    if (err) {
      return null;
    } else {
      return result;
    }
  });
  review.destroy({ where: { userId: data.id } })
    .then((result) => {
      user.destroy({ where: { id: data.id } })
        .then((result) => {
          res.clearCookie('id');
          res.clearCookie('nickname');
          res.clearCookie('email');
          res.clearCookie('oauth');
          res.clearCookie('accessToken');
          res.status(205).send('ok');
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

// 끝
