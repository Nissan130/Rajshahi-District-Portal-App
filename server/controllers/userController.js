const userModel = require("../models/userModel");
const cloudinary = require("cloudinary");
const getDataUri = require("../utils/features");
const { hashPassword, comparePassword } = require("../utils/authHelpers");
const jwt = require("jsonwebtoken");

// Register Controller
const registerController = async (req, res) => {
  try {
    const { name, mobileNumber, password, email, profession, address } =
      req.body;

    // Check if all required fields are provided
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
        message: "অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন",
      });
    }

    // Check if file (profile image) is uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "ছবি প্রদান করুন" });
    }

    // Convert file for Cloudinary upload
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);

    // Check if email already exists
    const emailExist = await userModel.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        success: false,
        message: "এই ইমেইল দ্বারা পূর্বে রেজিস্ট্রেশন করা হয়েছে ",
      });
    }

    // Check if mobile number already exists
    const mobileNumberExist = await userModel.findOne({ mobileNumber });
    if (mobileNumberExist) {
      return res.status(400).json({
        success: false,
        message: "এই মোবাইল নাম্বার দ্বারা পূর্বে রেজিস্ট্রেশন করা হয়েছে ",
      });
    }

    // Hash password before saving
    const hashedPassword = await hashPassword(password);

    // Save user data
    const newUser = new userModel({
      image: {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      },
      name,
      mobileNumber,
      password: hashedPassword,
      email,
      profession,
      address,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "রেজিস্ট্রেশন সফল হয়েছে",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobileNumber: newUser.mobileNumber,
        profession: newUser.profession,
        address: newUser.address,
        image: newUser.image,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "সার্ভার সমস্যা, অনুগ্রহ করে পরে চেষ্টা করুন",
      error: error.message,
    });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন",
      });
    }

    // Check if user exists by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "আপনার ইমেইলটি সঠিক নয়",
      });
    }

    // Compare hashed password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "আপনার পাসওয়ার্ডটি সঠিক নয়",
      });
    }

    // Generate JWT Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return res.status(200).json({
      success: true,
      message: "লগইন সফল হয়েছে",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
        profession: user.profession,
        address: user.address,
        image: user.image,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "কিছু ভুল হয়েছে! দয়া করে আবার চেষ্টা করুন",
      error: error.message,
    });
  }
};

module.exports = { registerController, loginController };
