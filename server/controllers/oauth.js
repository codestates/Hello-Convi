require('dotenv').config();
const { user } = require('../models');
const clientID = process.env.KAKAO_CLIENT_ID;
const clientSecret = process.env.KAKAO_CLIENT_SECRET;
const axios = require('axios');

module.exports = {
  post: async (req, res) => {
    // console.log(req.query.code)

    // let authorizationCode = req.query.code
    // console.log(req.body)
    const authorizationCode = req.body.authorizationCode;
    if (!authorizationCode) {
      res.json({ data: null, message: 'not authorized' });
    } else {
      console.log(authorizationCode);
      const Token = await axios.post(
                `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_secret=${clientSecret}&client_id=${clientID}&redirect_uri=http://localhost:3000/callback&code=${authorizationCode}`

      );
      // const Token = await axios.post("https://kauth.kakao.com/oauth", {
      //     grant_type:"authorization_code",
      //     clientID: "da4e288805f2fb1fe0efa41cb629944f",
      //     redirect_uri: "http://localhost:8080/oauth",
      //     code : authorizationCode
      // })
      const accessToken = Token.data.access_token;
      // console.log(accessToken)

      const kakaouser = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      // console.log(user.data)
      const nickname = kakaouser.data.kakao_account.profile.nickname;
      const email = kakaouser.data.kakao_account.email;
      console.log(nickname, email);
      user.findOrCreate({
        where: { email: email, nickname: nickname }
      })
        .then(([userInfo, created]) => {
          const { id, email, nickname, createdAt, updatedAt } = userInfo.dataValues;
          const payload = { id, email, nickname, createdAt, updatedAt };

          if (!created) {
            res.cookie('accessToken', accessToken).status(200).json({ data: payload, message: 'oauth login successfully' });
            // res.cookie('accessToken', accessToken).status(200).redirect('http://localhost:3000')
          } else {
            res.cookie('accessToken', accessToken).status(201).json({ data: payload, message: 'oauth sign up and login successfully' });
          }
        });

      // const accessToken = await axios.post(
      //     `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=da4e288805f2fb1fe0efa41cb629944f&redirect_uri=http://localhost:8080/oauth&code=${authorizationCode}`, )
      //     url: "https://kauth.kakao.com/oauth/token",
      //     headers:{
      //         "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      //     },
      //     data: {
      //         grant_type: "authorization_code",
      //         client_id: "da4e288805f2fb1fe0efa41cb629944f",
      //         client_secret: 'client',
      //         redirect_uri: 'http://localhost:3000',
      //         code : authorizationCode

      //     }
      // })
    }
    // res.send("hithisisoauth")
  },
  get: async (req, res) => {
    console.log('일단 겟 요청은 잘 받았다 ');
    res.redirect('http://localhost:3000');
  }

  // req.body로 authorization code 가 들어옴

};
