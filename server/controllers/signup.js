const { user } = require('../models');

module.exports = async (req, res) => {
  const { email, password, nickname } = req.body;
  if (!email || !password || !nickname) {
    res.status(422).send('blanks exist');
  } else {
    user.findOrCreate({ where: { email, nickname, password } })
      .then(([result, created]) => {
        if (created) {
          res.status(201).send('signup success');
        } else {
          res.status(409).send('email exist');
        }
      }).catch(err => console.log(err));
  }
};
// 회원가입 끝
