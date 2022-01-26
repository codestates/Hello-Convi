const { user } = require('../models');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const data = await user.findOne({ where: { email, password } });

  if (!data) {
    res.status(404).send('invalid user');
  } else {
    const payload = {
      id: data.id,
      email: data.email,
      nickname: data.nickname,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };
    const accessToken = sign(payload, process.env.ACCESS_SECRET, { expiresIn: '100m' });

    res.cookie('id', data.id);
    res.cookie('nickname', data.nickname);
    res.cookie('email', data.email);
    res.cookie('oauth', false);
    res.cookie('accessToken', accessToken);

    res.status(200).json({ data: payload, message: 'login success' });
  }
};

// 끝
