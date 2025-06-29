const express = require('express');
const { addHospitalController, getHospitalController } = require('../controllers/hospitalController');
const { singleImageUpload, uploadInfoMulter } = require('../middlewares/multer');
const router = express.Router();

router.post("/add-hospital", singleImageUpload, addHospitalController)
router.get("/get-hospitals", uploadInfoMulter, getHospitalController);

module.exports = router