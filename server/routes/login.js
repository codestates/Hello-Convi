const express = require('express');
const router = express.Router();
const Controller = require('../controllers/login');

router.post('/', Controller.post);
router.get('/oauth', Controller.oauth);

module.exports = router;
