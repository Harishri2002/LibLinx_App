const mongoose=require("mongoose");

const Books = mongoose.Schema({
    BookName: String,
    Author: String,
    Desc: String,
    selectedFile: String,
    Category:String,
    likeCount: {
        type : Number,
        default: 0
    },
    Tag: {
        type : Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});


module.exports=mongoose.model("Books",Books);