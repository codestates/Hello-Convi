module.exports = (req, res) => {
  res.clearCookie('accessToken').status(205).send('Sussecc Delete Cookie and Logout');
};

// 끝
