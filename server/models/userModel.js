const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profilePic: {
      public_id: {
        type: String
      },
      url: {
        type: String 
      }
    },
    image: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    profession: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
