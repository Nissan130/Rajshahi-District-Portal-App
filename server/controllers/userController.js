const userModel = require("../models/userModel");
const cloudinary = require('cloudinary')
const getDataUri = require("../utils/features");

// Register Controller
const registerController = async (req, res) => {
  try {
    const { name, mobileNumber, password, email, profession, address } =
      req.body;
    // file get from client photo
    const file = getDataUri(req.file);
    

    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

     const cdb = await cloudinary.v2.uploader.upload(file.content);


    if (
      !name ||
      !mobileNumber ||
      !password ||
      !email ||
      !profession ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // user.profilePic = {
    //   public_id: cdb.public_id,
    //   url: cdb.secure_url,
    // };

    const userData = new userModel({
      profilePic: {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      },
      name,
      mobileNumber,
      password,
      email,
      profession,
      address,
    });

    await userData.save(); // Fix: Await DB save

    return res.status(200).json({
      success: true,
      message: "Registration successful",
      userData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in register API",
      error: error.message,
    });
  }
};

module.exports = { registerController};
