const educationalInstitutionModel = require("../models/educationalInstitutionModel");
const getDataUri = require("../utils/features");
const cloudinary = require('cloudinary');

const addEducationalInstitutionController = async (req, res) => {
  try {
    const {
      institutionName,
      establishedYear,
      thana,
      address,
      institutionType,
    } = req.body;

    //get image file
    const file = getDataUri(req.file);

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }
      //upload image to the cloudinary database
      const cdb = await cloudinary.v2.uploader.upload(file.content);

      //check empty fields
      if (
        !institutionName ||
        !establishedYear ||
        !thana ||
        !address ||
        !institutionType
      ) {
        return res.status(400).json({
            success: false, 
            message: "All field are required"
        })
      }

      const data = new educationalInstitutionModel({
        image: {
            public_id: cdb.public_id,
            url: cdb.secure_url
        },
        institutionName,
        establishedYear,
        thana,
        address,
        institutionType
      });

      //save data to DB
      await data.save();

      return res.status(201).json({
        success: true, 
        message: "Insitution added successfully",
        data
      })
    
  } catch (error) {
    return res.status(400).json({
        success: false, 
        message: "Error in api",
        error: error.message
    })
  }
};

//get  educational institutions 
const getEducationalInstitutionController = async (req, res) => {
    try{
        const getData = await educationalInstitutionModel.find();
        return res.status(200).json({
          success: true, 
          message: "Got data successfully",
          getData
        })
    } catch(error) {
      return res.status(400).json({
        success: false,
        message: "Urror in getting data",
        error: error.message
      })
    }
}

module.exports = {addEducationalInstitutionController, getEducationalInstitutionController}

