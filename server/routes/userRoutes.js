const express = require('express');
const singleUpload  = require('../middlewares/multer');
const registerController =
  require("../controllers/userController").registerController;
  console.log(registerController)

const router = express.Router();

//register route
router.post('/register', singleUpload, registerController);

module.exports = router;

