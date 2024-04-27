const express=require("express")
const { addQr } = require('../controllers/qrAuth');


const route = express.Router();

route.post("/", addQr);


module.exports  = route