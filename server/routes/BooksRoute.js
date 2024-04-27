const express=require("express")
const { createBooks,getBooks } = require('../controllers/BooksPost');

const route = express.Router();

route.get("/", getBooks);
route.post("/", createBooks);


module.exports  = route