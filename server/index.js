const express = require('express');

const cookieParser = require('cookie-parser');
const port = 8080;
const cors = require('cors');
const app = express();

const login = require('./controllers/login');
const logout = require('./controllers/logout');
const getitems = require('./controllers/getitems');
const dropout = require('./controllers/dropout');
const signup = require('./controllers/signup');
const review = require('./routes/review');
const user = require('./routes/user');
const check = require('./controllers/check');

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/login', login);
app.get('/logout', logout);
app.get('/getitems/:word', getitems);
app.post('/signup', signup);
app.delete('/dropout', dropout);
app.use('/user', user);
app.use('/review', review);
app.use('/check', check);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
