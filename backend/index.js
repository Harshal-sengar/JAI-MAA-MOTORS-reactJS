const mongoose =require("mongoose");

const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://user2000:test456@jai-maa-motors.qwkvt7h.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const bookVehicleSchema = mongoose.Schema({
    name: { type:String, required:true },
    mobileNumber: { type:Number, required:true },
    Address: { type:String, required:true },
    Vehicle: { type:String, required:true },
    vehicleColor:{type:String, required:true}
})

const bookvehicle=mongoose.model("BookVehicle", bookVehicleSchema);
bookvehicle.createIndexes();
app.post('/BookVehicle', async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const mobilenumber = req.body.mobileNumber;
  const address = req.body.address;
  const vehicle = req.body.vehicle;
  const vehicleColor=req.body.vehicleColor;

  const newBookVehicleData = new bookvehicle({
    name: name,
    mobileNumber: mobilenumber,
    Address: address,
    Vehicle: vehicle,
    vehicleColor:vehicleColor
  });

  try {
      await newBookVehicleData.save();
      res.status(200).json({message: 'Booking successfully added!'});
  } catch (error) {
      res.status(400).json({message: 'Error occurred while adding booking', errorDetails: error});
  }
});

const customerSupportSchema=mongoose.Schema({
    name:{ type:String, required:true},
    number:{type:Number, required:true},
    area:{type: String, required:true},
    subject:{type:String, required:true}
})

const customersupport=mongoose.model("CustomerSupport",customerSupportSchema);
customersupport.createIndexes();
app.post("/CustomerSupport", async (req, res)=>{
  console.log(req.body);
  
  const name=req.body.name;
  const number=req.body.number;
  const area=req.body.area;
  const subject=req.body.subject;

  const newCustomerSupportData=new customersupport({
    name:name,
    number:number,
    area:area,
    subject:subject
  });
  newCustomerSupportData.save();
})

const serviceAppointmentSchema=mongoose.Schema({
  name:{type:String, required:true},
  number:{type:Number, require:true},
  address:{type:String, required:true},
  vehicle:{type:String, required:true},
  registrationNumber:{type:String, required:true},
  date:{type:String, required:true},
  appointmentNumber:{type:Number, required:true}

})
const serviceappointment=mongoose.model("ServiceAppointment", serviceAppointmentSchema);
serviceappointment.createIndexes();
app.post("/ServiceAppointment", async (req,res)=>{
  console.log(req.body);
  const name=req.body.name;
  const number=req.body.number;
  const address=req.body.address;
  const vehicle=req.body.vehicle;
  const registrationNumber=req.body.registrationNumber;
  const date=req.body.date;
  const counter = req.body.counter;
 
  const newServiceAppointment= new serviceappointment({
     name:name,
     number:number,
     address:address,
     vehicle:vehicle,
     registrationNumber:registrationNumber,
     date:date,
     appointmentNumber: counter
  });
 
  try {
     await newServiceAppointment.save();
     res.status(200).json({counter: counter + 1});
  } catch (err) {
     console.error(err);
     res.status(500).send(err);
  }
 })
app.listen(5000, function () {
    console.log("listening on port 5000");
});

app.get("/", function(req,res){
    res.send("APP is working");
})

