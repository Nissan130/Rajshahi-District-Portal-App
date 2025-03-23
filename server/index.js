const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express()
const cloudinary = require('cloudinary')
const multer  = require('multer');

//config env file
dotenv.config();
const PORT = process.env.PORT || 3000

//mongodb database connection
connectDB();

//middleware
app.use(express.urlencoded({extended: true})); // for form data
app.use(cors()); 



//cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.COUDINARY_NAME,
  api_key: process.env.COUDINARY_API_KEY,
  api_secret: process.env.COUDINARY_SECRET,
});


//routes
//user routes
app.use("/api/auth", require('./routes/userRoutes'));

//educational insitution routes
app.use("/api/main/educational-institution", require('./routes/educationalInstitutionRoute'));


//run server on port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

