

const mongoose=require('mongoose')
require('dotenv').config()

// const connection=mongoose.connect(process.env.mongoURL)

// module.exports={connection}

const connectDB = async()=>{
    try {
        const connection =await mongoose.connect(process.env.mongoURL)
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
 
module.exports = {
    connectDB
}