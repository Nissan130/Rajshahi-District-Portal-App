const hospitalModel = require("../models/hospitalModel");
const getDataUri = require("../utils/features");
const cloudinary = require("cloudinary");

const addHospitalController = async (req, res) => {
  try {
    const {
      adderId,
      adderImageId,
      adderImageUrl,
      adderName,
      hospitalName,
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
      !adderImageId||
      !adderImageUrl||
      !adderName ||
      !hospitalName ||
      !thana ||
      !address ||
      !hotlineNumber
    ) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }

    const data = new hospitalModel({
      adderId: adderId,
      adderImage: {
        public_id: adderImageId,
        url: adderImageUrl,
      },
      adderName: adderName,
      hospitalImage: {
        public_id: cdb.public_id,
        url: cdb.secure_url,
      },
      hospitalName: hospitalName,
      thana: thana,
      address: address,
      hotlineNumber: hotlineNumber,
    });

    //save data in db
    await data.save();

    return res.status(200).send({
      success: true,
      message: "Hospital added successfully",
      data,
    });
  } catch (error) {
    return res.status(500).send({
        success: false, 
        message: "Error in hospital api"
    })
  }
};

// get hospital from db
const getHospitalController = async (req,res) => {
    try {
        const getHospitalData = await hospitalModel.find();
        return res.status(200).json({
            success: true,
            message: "Got hospital data successfully",
            getHospitalData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro in getting data",
            error
        })
        
    }
}
module.exports = { addHospitalController, getHospitalController };
