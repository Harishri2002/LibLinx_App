const mongoose=require("mongoose");

const Holder = mongoose.Schema({
    BookName: String,
    Reg : String,
    Event : String,
    BorrowAt:{
        type: Date,
        default: new Date()
    },
    ReturnAt:{
        type: Date,
        default: new Date()
    },
    process: String,
});


module.exports=mongoose.model("Holder",Holder);