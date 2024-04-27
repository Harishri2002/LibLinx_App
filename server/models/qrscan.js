const mongoose=require("mongoose");

const qrscan = mongoose.Schema({
    Reg: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    inTime: {
        type: Date,
        default: new Date()
    },
    outTime: {
        type: Date,
        default:null
    }
})


module.exports=mongoose.model("qrscan",qrscan);


