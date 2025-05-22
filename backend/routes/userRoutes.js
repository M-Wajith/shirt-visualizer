const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createAdmin);

module.exports = router;