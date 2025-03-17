const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to database ${mongoose.connection.host}`);
    }
    catch(error) {
        console.log(`Error in Database Connection ${error}`);
    }
};
module.exports = connectDB