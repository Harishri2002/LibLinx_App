const express=require("express")
const { Holder } = require('../controllers/BookHolder');


const route = express.Router();

route.post("/", Holder);


module.exports  = route