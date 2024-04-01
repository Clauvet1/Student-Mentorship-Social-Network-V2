const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.post('/addData', dataController.addData);

module.exports = router;