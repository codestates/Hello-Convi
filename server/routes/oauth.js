const express = require('express');
const router = express.Router();
const Controller = require('../controllers/oauth');


router.post('/', Controller.post);
router.get('/', Controller.get);
// router.delete('/:id', Controller.delete);

module.exports = router;
