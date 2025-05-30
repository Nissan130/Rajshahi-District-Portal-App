const express = require("express");
const {
  addDiagnosticController,
  getDiagnosticController,
} = require("../controllers/diagnosticsController");
const {
  singleImageUpload,
  uploadInfoMulter,
} = require("../middlewares/multer");
const router = express.Router();

router.post("/add-diagnostics", singleImageUpload, addDiagnosticController);
router.get("/get-diagnostics", uploadInfoMulter, getDiagnosticController);

module.exports = router;
