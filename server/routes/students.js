const express=require("express")
const { addStd,getStd } = require('../controllers/Students');

const route = express.Router();

route.post("/", addStd);
route.post("/User", getStd);

module.exports  = route