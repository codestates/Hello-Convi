const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user');

router.get('/', Controller.get);
router.patch('/', Controller.patch);

module.exports = router;
