module.exports = (req, res) => {
  res.clearCookie('accessToken').status(205).redirect('/');
};

// 끝
