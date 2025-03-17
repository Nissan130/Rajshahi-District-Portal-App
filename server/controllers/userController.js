const userModel = require("../models/userModel");
const multer = require('multer');

//upload profile image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+"-"+file.originalname);
  }
});

const uploadProfileImage = multer({storage});

//register controller
const registerController = async (req, res) => {
  try {
   const {name, mobileNumber, password, email, profession, address} = req.body;
   const {path, filename} = req.file;
   const image = {path,filename}

   if(!image || !name || !mobileNumber || !password || !email || !profession || !address) {
      return res.status(500).send({
        success: false,
        message: "All fields is required."
      })
   }
   //image path and filename
  
    const userData =  await userModel({
      image,
      name,
      mobileNumber,
      password,
      email,
      profession,
      address
     });

     //save user
     userData.save();
   
    return res.status(201).send({
      success: true,
      message: "Registration successfull",
      userData
    });

  } catch (error) {
    return  res.status(500).send({
        success: false,
        message:"Error in register API",
        error:  error.message
    })
  }
};

module.exports = { registerController, uploadProfileImage };
