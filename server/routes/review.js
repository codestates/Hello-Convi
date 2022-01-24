const express = require('express');
const router = express.Router();
const Controller = require('../controllers/review');

router.get('/:id', Controller.get);
router.post('/', Controller.post);
router.patch('/', Controller.patch);
router.delete('/:id', Controller.delete);

module.exports = router;
