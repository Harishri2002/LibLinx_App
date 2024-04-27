const Student = require("../models/Student");
const qrscan = require("../models/qrscan");
const Records = require("../models/Record");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function addQr(req, res) {
  // try{
  const body = req.body;
  const { Reg } = body;

  if (!Reg) {
    res.status(400);
    throw new Error("please enter value for required fields");
  }
  const student = await Student.findOne({ Reg });
  const userAvailability = await qrscan.findOne({ Reg });
 
  if (userAvailability) {
    let ot = new Date();
    let qrScan = await qrscan.findByIdAndUpdate(userAvailability._id, { $set: { ot }});
    let name=qrScan.Name
    console.log(qrScan.outTime)
    //Puting data into Records Database
    const newData = {
    Reg : qrScan.Reg,
    Name : qrScan.Name,
    course : qrScan.course,
    inTime : qrScan.inTime,
    outTime: ot
    };
    console.log(newData);
    // await sleep(10000);

    let del = await qrScan.deleteOne({_id: userAvailability._id})
    let newRec = await Records.create(newData);
    res.status(201).json({ str:"Student Updated Sucessfully",name});
  } else if (!student) {
    res.status(201).json("Student does not exists");
  } else {
    const stud = await Student.findOne({ Reg });
    const newUser = await qrscan.create({
      Name: stud.Name,
      Reg: stud.Reg,
      course: stud.course,
    });

    let name = newUser.Name;

    if (newUser) {
      res.status(201).json({ _id: newUser.id, Reg, name });
    } else {
      res.status(400);
      throw new Error("use data not valid");
    }
  }
}
// catch{
//     return res.status(400).json({msg: "student data not created"});
// }
// }

module.exports = { addQr };
