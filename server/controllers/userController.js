const userModel = require("../models/userModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Upload Profile Image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const uploadProfileImage = multer({ storage });

// Register Controller
const registerController = async (req, res) => {
  try {
    const { name, mobileNumber, password, email, profession, address } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const imageUrl = `http://10.1.1.108:8080/uploads/${req.file.filename}`;

    if (!name || !mobileNumber || !password || !email || !profession || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const userData = new userModel({
      image: imageUrl, // Store URL instead of file path
      name,
      mobileNumber,
      password,
      email,
      profession,
      address,
    });

    await userData.save(); // Fix: Await DB save

    return res.status(201).json({
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

module.exports = { registerController, uploadProfileImage };
