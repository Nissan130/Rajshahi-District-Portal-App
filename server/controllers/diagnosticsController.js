const diagnosticModel = require("../models/diagnosticsModel");
const getDataUri = require("../utils/features");
const cloudinary = require("cloudinary");

const addDiagnosticController = async (req, res) => {
  try {
    const {
      adderId,
      adderImageId,
      adderImageUrl,
      adderName,
      diagnosticName,
      thana,
      address,
      hotlineNumber,
    } = req.body;

    //get image file
    const file = getDataUri(req.file);

    if (!file) {
      return res.status(500).send({
        success: false,
        message: "Image is required",
      });
    }

    //upload image to the cloudinary db
    const cdb = await cloudinary.v2.uploader.upload(file.content);

    //check empty fields
    if (
      !adderId ||
      !adderImageId ||
      !adderImageUrl ||
      !adderName ||
      !diagnosticName ||
      !thana ||
      !address ||
      !hotlineNumber
    ) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }

    const data = new diagnosticModel({
      adderId: adderId,
      adderImage: {
        public_id: adderImageId,
        url: adderImageUrl,
      },
      adderName: adderName,
      diagnosticImage: {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      },
      diagnosticName: diagnosticName,
      thana: thana,
      address: address,
      hotlineNumber: hotlineNumber,
    });

    //save data in db
    await data.save();

    return res.status(200).send({
      success: true,
      message: "diagnostic added successfully",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in diagnostic api",
    });
  }
};

// get diagnostic from db
const getDiagnosticController = async (req, res) => {
  try {
    const getdiagnosticData = await diagnosticModel.find();
    return res.status(200).json({
      success: true,
      message: "Got diagnostic data successfully",
      getdiagnosticData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro in getting data",
      error,
    });
  }
};
module.exports = { addDiagnosticController, getDiagnosticController };
