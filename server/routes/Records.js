const express=require("express")
const { getRecords } = require('../controllers/Records');

const route = express.Router();

route.get("/", getRecords);


module.exports  = route