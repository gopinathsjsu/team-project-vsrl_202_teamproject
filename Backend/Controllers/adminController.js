const admin = require("../Models/userSchema");
const Flight=require("../Models/flightModel/flight.model");
const flightschema = require("../Models/FlightSchema");
exports.createFlight=(req,res) =>{

const flight = new Flight(req.body);


flight.collection.insert(flight)
  .then((data)=>{
     resolve(data);
  }).catch((err)=>{
     reject(err);
});
}
exports.editFlight=(req,res) =>{
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
exports.editFlights=(req,res) =>{

}
exports.deleteFlights=(req,res) =>{

}
exports.getAllFlights=(req,res) =>{
//
}
exports.getFlight=(req,res) =>{

}
exports.getFlightById =(req,res) =>{

}
exports.getAllPassengers =(req,res) =>{

}
exports.getAllPilots =(req,res) =>{

}
exports.getAllAirhostress =(req,res) =>{

}
exports.createAirHostressDetails =(req,res) =>{
const airhostess = new userSchema(req.body)
airhostess.role=2;
airhostess.save()
.then((airhostess)=>{
    return{
        airhostess: airhostess.firstName
    };
})
.catch((err)=>{
    return{
        error: "Not able to create passenger"
    };  
})
}
exports.createPassengerDetails =(req,res) =>{
const passenger = new userSchema(req.body)
passenger.role = 3;
passenger.save()
.then((passenger)=>{
    return {
        passengername: passenger.firstName
    };
})
.catch((err)=>{
    return{
        error: "Not able to create passenger"
    };
}

)
}

exports.createPilotDetails =(req,res) =>{
    const pilot = new userSchema(req.body)
    pilot.role=1;
    pilot.save()
    .then((pilot)=>{
        return{
            pilot: pilot.firstName
        };
    })
    .catch((err)=>{
        return{
            error: "Not able to create pilot"
        };  
    })
    }

