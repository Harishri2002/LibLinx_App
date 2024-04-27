const mongoose=require("mongoose");

const student = mongoose.Schema({
    Name: String,
    Reg: String,
    course: String,
    semister: String,
    Tag: {
        type : Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});


module.exports=mongoose.model("Students",student);