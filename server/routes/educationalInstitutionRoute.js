const express = require('express');
const { singleImageUpload } = require('../middlewares/multer');
const { addEducationalInstitutionController, getEducationalInstitutionController } = require('../controllers/educationalInstitutionController');

const router = express.Router();

router.post("/add-institution", singleImageUpload, addEducationalInstitutionController);
router.get("/get-institution", getEducationalInstitutionController);

module.exports = router