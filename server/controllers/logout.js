module.exports = (req, res) => {
  res.clearCookie('id');
  res.clearCookie('nickname');
  res.clearCookie('email');
  res.clearCookie('oauth');
  res.clearCookie('accessToken').status(205).send('ok');
  res.redirect('/')
};

// 끝
