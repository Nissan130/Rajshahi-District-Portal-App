const mongoose = require("mongoose");

const educationalInstitutionSchema = new mongoose.Schema(
  {
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    institutionName: {
      type: String,
      required: true,
    },
    establishedYear: {
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
    institutionType: {
      type: String,
      required: true,
      enum: ["school", "college", "madrasha", "university", "coachingCenter"],
    },
  },
  { discriminatorKey: "institutionType", timestamps: true }
);

module.exports = mongoose.model(
  "EducationalInstitution",
  educationalInstitutionSchema
);
