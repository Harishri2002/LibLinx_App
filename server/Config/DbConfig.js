const mongoose = require("mongoose")

async function connectDb(){
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Database Connected");
    }
    catch(err){
        console.log("error in mongodb");
    }
}

module.exports = { connectDb }