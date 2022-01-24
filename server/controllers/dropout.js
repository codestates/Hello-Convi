const { user } = require('../models');
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
  user.destroy({ where: { id: data.id } })
    .then((result) => {
      res.json({ data: result, message: 'Success User Delete' });
    })
    .catch((err) => {
      console.error(err);
    });
};

// 끝
