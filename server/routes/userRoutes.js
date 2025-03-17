const express = require('express');
const { registerController, uploadProfileImage } = require('../controllers/userController');
const router = express.Router();

//register route
router.post('/register',uploadProfileImage.single('image'), registerController);

module.exports = router;

