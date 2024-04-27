const express=require("express")

const { SignUp,Login } = require('../controllers/Signup.js');

const route = express.Router();

route.post('/',SignUp);
route.post("/login",Login);

module.exports = route;