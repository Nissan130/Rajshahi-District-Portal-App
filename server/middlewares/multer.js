const multer = require('multer');

const storage = multer.memoryStorage();
const singleImageUpload = multer({ storage }).single("image");

const uploadInfoMulter = multer().none();



module.exports ={ singleImageUpload, uploadInfoMulter}
