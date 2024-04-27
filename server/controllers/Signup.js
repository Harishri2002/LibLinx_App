const Sign = require('../models/LoginAuth');
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// const express = require("express");
// var app = express();
// var cors = require('cors');
// app.use(cors({origin: true, credentials: true}));
// async function comparee(userPass,hashPass){
//   const res = await bcrypt.compare(userPass,hashPass);
//   console.log(res)
//   return res;
// }

async function SignUp(req,res){
    try{
        
    const body = req.body;
    const { name, email, password } = body;
    if (!name || !email || !password) {
           res.status(400);
           throw new Error("please enter value for required fields");
       }
    const userAvailability = await Sign.findOne({ email });

    if (userAvailability) {
        res.status(400);
        throw new Error("User already exists");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Sign.create({
          name,
          email,
          password: hashedPassword,
        });
  
        if (newUser) {
          res.status(201).json({ _id: newUser.id, name, email });
        } else {
          res.status(400);
          throw new Error("use data not valid");
        }
      }
    console.log(body);
    }
    catch{
        return res.status(400).json({msg: "user not created"});
    }
}

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};



async function Login(req,res){
  try {
    const { email, password } = req.body;

    //check if the user exists
    const user = await Sign.findOne({ email });
    let Regg =user.Reg;
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
     console.log(Regg)
    //check if the password is correct
    const passCheck = await bcrypt.compare(password,user.password);
    if (!passCheck) {
      return res.status(401).json({ message: "Invalid password" });
    }
     
    //generate a token
    const secretKey = generateSecretKey();
    const token = jwt.sign({ userId: user._id, Reg: user.Reg }, secretKey);

    res.status(200).json({ token, Reg: user.Reg });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
}

module.exports = { SignUp,Login };