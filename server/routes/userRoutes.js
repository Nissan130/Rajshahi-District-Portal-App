const express = require('express');
const singleUpload  = require('../middlewares/multer');
const loginController  = require('../controllers/userController').loginController;
const registerController =
  require("../controllers/userController").registerController;


const router = express.Router();

//register route
router.post('/register', singleUpload, registerController);

//login route 
router.post('/login', loginController);

module.exports = router;

