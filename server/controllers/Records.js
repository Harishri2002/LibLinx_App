const  Record = require('../models/Record');


async function createRecord(req,res){
    const post = req.body;
    const newPost = new Record(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(404).json({ Message: error.Message } );
    }
}

async function getRecords(req,res){
    try{
        const GetRec = await Record.find();
        console.log(GetRec);
        res.status(200).json(GetRec);
    }
    catch(error){
        res.status(404).json({ Message: error.Message } );
    }
}

module.exports = { createRecord,getRecords };