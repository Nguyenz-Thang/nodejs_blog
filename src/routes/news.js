const newController = require('../app/controllers/NewsController.js');
const express = require('express');
const router = express.Router();

// newController.index
router.use('/:slug', newController.show);

router.use('/', newController.index);

module.exports = router;
