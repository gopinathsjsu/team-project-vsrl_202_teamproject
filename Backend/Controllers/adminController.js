const flight = require("../Models/FlightSchema");
const admin = require("../Models/userSchema");
const Flight=require("../Models/flightModel/flight.model");
const flightschema = require("../Models/FlightSchema");
exports.createFight=(req,res) =>{
//create a new flight
// const flight = new User({
//     pilotId: req.body.pilotId,
//     arrLoc: req.body.arrLoc,
//     deptLoc: req.body.deptLoc,
//     arrTime: req.body.arrTime,
//     depTime: req.body.depTime,
//     status:req.body.status,
//     createTimeStamp:req.body.createTimeStamp,
//     modifiedTimeStamp:req.body.modifiedTimeStamp
// });

const flight = new Flight(req.body);

//let newFlight = new Flight(flight);
flight.collection.insert(flight)
  .then((data)=>{
     resolve(data);
  }).catch((err)=>{
     reject(err);
});
}
exports.editFight=(req,res) =>{
var flightid =req.body._id;
const flight = new Flight(req.body);
if(mongoose.Types.ObjectId.isValid(flightid)) {
    flightschema.findByIdAndUpdate(flightid,{$set:{pilotid: flight.pilotId,arrivallocation: flight.arrivalLocation, departLocation: flight.deptLoc, arrivalTime: flight.arrTime, departTime: flight.depTime, status: flight.status, pilotid: flight.pilotId}},{new:true}).then((docs)=>{
       if(docs) {
         resolve({success:true,data:docs});
       } else {
         reject({success:false,data:"no such flight exist"});
       }
    }).catch((err)=>{
        reject(err);
    })
    } else {
      reject({success:"false",data:"provide correct Id"});
    }
}

exports.deleteFlight=(req,res) =>{
    var flightid =req.body._id;
    if(mongoose.Types.ObjectId.isValid(id)) {
        User.findOneAndRemove({_id: flightid})
          .then((docs)=>{
             if(docs) {
                resolve({"success":true,data:docs});
             } else {
                reject({"success":false,data:"no such flight exist"});
             }
        }).catch((err)=>{
            reject(err);
        })
      } else {
          reject({"success":false,data:"please provide correct Id"});
      }
}
exports.editFights=(req,res) =>{

}
exports.deleteFights=(req,res) =>{

}
exports.getAllFights=(req,res) =>{
//
}
exports.getFight=(req,res) =>{

}
exports.getFlightById =(req,res) =>{

}
exports.passengerDetails =(req,res) =>{

}
exports.pilotDetails =(req,res) =>{

}
exports.airhostessDetails =(req,res) =>{

}