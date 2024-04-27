
const Books = require('../models/Books');

async function getBooks(req,res){
    try{
        const Getbook = await Books.find();
        console.log(Getbook);
        res.status(200).json(Getbook);
    }
    catch(error){
        res.status(404).json({ Message: error.Message } );
    }
}

async function createBooks(req,res){
    const post = req.body;
    const newPost = new Books(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(404).json({ Message: error.Message } );
    }

}

module.exports = {createBooks,getBooks}