const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

//config dot env file
dotenv.config();

const app = express();
const PORT  = process.env.PORT

//get home route
app.get('/', (req,res)=> {
    res.send('Get request for home route')
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})