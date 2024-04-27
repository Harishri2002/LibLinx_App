const Student = require("../models/Student");
const Books = require('../models/Books');
const Hold = require('../models/Holder');

async function Holder(req, res) {
  try {
    const body = req.body;
    const { Reg } = body;
    console.log({Reg})
    const GetHolder = await Hold.find({ Reg });
    console.log(GetHolder);
    res.status(200).json(GetHolder);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
}

module.exports = { Holder };
