const multer = require('multer');

const storage = multer.memoryStorage();
const singleUpload = multer({ storage }).single("profilePic");

const uploadInfoMulter = multer().none();



module.exports ={ singleUpload, uploadInfoMulter}
