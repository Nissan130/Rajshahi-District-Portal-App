const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    adderId: {
      type: String,
      required: true,
    },
    adderImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    adderName: {
      type: String,
      required: true,
    },
    hospitalImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    hospitalName: {
      type: String,
      required: true,
    },
    thana: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hotlineNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospitals", hospitalSchema);
