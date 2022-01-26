module.exports = (req, res) => {
  res.clearCookie('id')
  res.clearCookie('nickname')
  res.clearCookie('email')
  res.clearCookie('oauth')
  res.clearCookie('refreshToken')
  res.clearCookie('accessToken').status(205).send('Logout ok');
};

// 끝
