const mongoose = require("mongoose");

const diagnosticSchema = new mongoose.Schema(
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
    diagnosticImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    diagnosticName: {
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
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diagnostics", diagnosticSchema);
