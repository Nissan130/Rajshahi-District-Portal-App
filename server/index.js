const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const cloudinary = require("cloudinary");
const multer = require("multer");
const morgan = require('morgan')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON data (Important for Axios)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data (for form submissions)

// CORS Configuration (Allowing specific origins)
const corsOptions = {
  origin: "*", // Change this to your frontend domain for security
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(morgan('dev'));

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.get("/", (req, res) => {
  res.send("React Native API is running!");
});

// Routes
app.use("/api/auth", require("./routes/userRoutes"));
app.use(
  "/api/main/educational-institution",
  require("./routes/educationalInstitutionRoute")
);
app.use("/api/main/hospitals", require("./routes/hospitalRoute"));
app.use("/api/main/diagnostics", require("./routes/diagnosticRoute"));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
