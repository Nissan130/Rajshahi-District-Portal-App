const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express()

//config env file
dotenv.config();
const PORT = process.env.PORT || 8080

//mongodb database connection
connectDB();

//middleware
app.use(express.json());
app.use(cors({ origin: "*"})); // Allow all origins

//routes
//user routes
app.use("/api/auth", require('./routes/userRoutes'));

app.get('/api/auth/register', (req,res)=> {
  res.send('React native');
})
app.use("/uploads", express.static("uploads"));


//run server on port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

