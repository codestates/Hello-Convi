const jwt = require('jsonwebtoken');
const { user } = require('../models');
require('dotenv').config();

module.exports = async (req, res) => {
  const nickname = req.body.nickname;
  const email = req.body.email;
  const password = req.body.password;

  if (password && !email && !nickname) { // 비밀번호 확인 요청
    // 이 경우 쿠키에 있는 유저 정보와 비밀번호 일치 확인
    const cookie = res.cookies.accessToken;
    if (!cookie) {
      res.json({ data: null, message: 'not Authorized' });
    } else {
      const userdata = jwt.verify(cookie, process.env.ACCESS_SECRET);

      const userid = userdata.id;
      const userInfo = await user.findOne(
        { where: { id: userid } }
      );
      if (userInfo.dataValues.password === password) {
        res.json({ data: null, message: 'password correct!' });
      } else {
        res.json({ data: null, message: 'incorrect password' });
      }
    }
  } else if (nickname && !email && !password) {
    // 이 경우 닉네임 중복확인
    const findnick = await user.findOne({
      where: { nickname: nickname }
    });
    if (!findnick) {
      res.json({ data: null, message: 'nickname available!' });
    } else {
      res.json({ data: null, message: 'nickname already exists' });
    }
  } else if (email && !password && !nickname) {
    // 이 경우 이메일 중복 확인
    const findemail = await user.findOne({
      where: { email: email }

    });
    if (!findemail) {
      res.json({ data: null, message: 'email available!' });
    } else {
      res.json({ data: null, message: 'email already exists' });
    }
  } else {
    res.json({ data: null, message: 'wrong request' });
  }
};
