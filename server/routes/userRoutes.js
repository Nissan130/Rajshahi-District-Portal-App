const express = require('express');
const {uploadInfoMulter, singleImageUpload } = require("../middlewares/multer");
const loginController  = require('../controllers/userController').loginController;
const registerController =
  require("../controllers/userController").registerController;


const router = express.Router();

//register route
router.post('/register', singleImageUpload, registerController);

//login route 
router.post('/login', uploadInfoMulter, loginController);

module.exports = router;

