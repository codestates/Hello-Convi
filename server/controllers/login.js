const { user } = require('../models');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post:async (req,res)=>{
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
      const accessToken = sign(payload, process.env.ACCESS_SECRET, { expiresIn: '1m' });
      const refreshToken = sign(payload, process.env.REFRESH_SECRET, { expiresIn: '10m' });

      res.cookie('refreshToken', refreshToken,{httpOnly:true,secure:true,sameSite:'none'}).status(200).json({ data: {payload,accessToken}, message: 'login success' });
    }
  },
  oauth:(req,res)=>{
    res.status(200).send('ok')
  }
  
};

// 끝
