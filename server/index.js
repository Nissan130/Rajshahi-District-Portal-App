const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express()

//config env file
dotenv.config();
const PORT = process.env.PORT || 3000

//mongodb database connection
connectDB();

//middleware
app.use(express.json());

//routes
//user routes
app.use("/api/auth", require('./routes/userRoutes'));



//run server on port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

