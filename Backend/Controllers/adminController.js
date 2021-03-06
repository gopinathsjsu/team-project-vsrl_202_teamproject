const UserSchema = require("../Models/userSchema");
const FlightSchema = require("../Models/FlightSchema");
const mongoose = require("mongoose");
exports.createFlight=(req,res) =>{
const flight = new FlightSchema(req.body);
return FlightSchema.collection.insertOne(flight)
  .then((data)=>{   
    res.json({success:true,data:data,"error":false});
  }).catch((err)=>{   
    console.log(err);
    res.json({success:false,"error":err});
});
}
exports.editFlight=(req,res) =>{
const flight = {
    id:req.body._id,
    flightNumber:req.body.flightNumber,
    pilotId:req.body.pilotId,
    arrivalLocation:req.body.arrivalLocation,
    departureLocation:req.body.departureLocation,
    status:req.body.status,
    arrivalTime:new Date(req.body.arrivalTime),
    departureTime:new Date(req.body.departureTime),
    createdDateTime:new Date(req.body.createdDateTime),
    modifiedDateTime:new Date(req.body.modifiedDateTime)
   };
if(mongoose.Types.ObjectId.isValid(flight.id)) {
   return FlightSchema.findByIdAndUpdate(flight.id,{$set:{flightNumber:flight.flightNumber, pilotId: flight.pilotId,arrivalLocation: flight.arrivalLocation, departureLocation: flight.departureLocation, arrivalTime: flight.arrivalTime, departureTime: flight.departureTime,status:flight.status,createdDateTime:flight.createdDateTime,modifiedDateTime:flight.modifiedDateTime}},{new:false})
    .then((docs)=>{
       if(docs) {
         res.json({success:true,data:docs});
       } else {        
         res.json({success:false,msg:"no such flight exist"});
       }
    }).catch((err)=>{
        console.log(err);
        res.json({success:false,msg:"error: "+err});
    })
    } else {     
     res.json({success:false,msg:"provide correct id"});
    }
}
exports.deleteFlight=(req,res) =>{
    var flightId =req.params.flightId;
    if(mongoose.Types.ObjectId.isValid(flightId)) {
        return FlightSchema.findOneAndRemove({_id: flightId})
          .then((docs)=>{
             if(docs) {
                res.json({success:true,data:docs});                
             } else {
                res.json({success:false,msg:"no such flight exist"});                
             }
        }).catch((err)=>{           
            console.log(err);
            res.json({success:false,msg:"error: "+err});
        })
      } else {
          res.json({"success":false,msg:"please provide correct Id"});          
      }
}
exports.editFlights=(req,res) =>{

}
exports.deleteFlights=(req,res) =>{

}
exports.cancelFlight = (req, res) => {
    const flightNumber = parseInt(req.body.flightNumber);
    return FlightSchema.deleteOne({ flightNumber: flightNumber })
        .exec()
        .then((flight) => {
            return res.json(flight);
        })
        .catch(error => {
            return {
                error: "Flight Cancellation Failed " + error
            };
        })
}
exports.getAllFlights=(req,res) =>{
return FlightSchema.find({})
 .then((data)=>{
   return res.json({success:true,data:data});
  })
 .catch((err)=>{
   console.log(err);
   res.json({success:false,msg:"error: "+err});
 })
}
exports.getFlight=(req,res) =>{

}
exports.getFlightById =(req,res) =>{

}
exports.getAllPassengers =(req,res) =>{
    var flightId = req.body.flightId;

    return UserSchema.find({flightId: flightId,role: 3})
    .exec()
    .then((passengers) => {
        return res.json(passengers);
    })
    .catch(error=>{
        return {
            error: "No User Found "+error
        };
    })
}
exports.getAllPilots =(req,res) =>{
    var flightId = req.body.flightId;

    return UserSchema.find({flightId: flightId,role: 1})
    .exec()
    .then((passengers) => {
        return res.json(passengers);
    })
    .catch(error=>{
        return {
            error: "No User Found "+error
        };
    })
}

exports.getAllAirhostress =(req,res) =>{
        var flightId = req.body.flightId;
    
        return UserSchema.find({flightId: flightId,role: 3})
        .exec()
        .then((passengers) => {
            return res.json(passengers);
        })
        .catch(error=>{
            return {
                error: "No User Found "+error
            };
        })
}
exports.createAirHostressDetails =(req,res) =>{
const airhostess = new UserSchema(req.body)
airhostess.role=2;
airhostess.save((err, airhostess)=>{
    if(err){
        return res.status(400).json({
            err: "NOT able to save airhostess in DB"+"Error is"+err
        });
    }
    res.json({
        name: airhostess.name,
        email: airhostess.email,
        id: airhostess._id
    })    
});
}
exports.createPassengerDetails =(req,res) =>{
    const passenger = new UserSchema(req.body)
    passenger.role=3;
    passenger.save((err, passenger)=>{
        if(err){
            return res.status(400).json({
                err: "NOT able to save passenger in DB"+"Error is"+err
            });
        }
        res.json({
            name: passenger.name,
            email: passenger.email,
            id: passenger._id
        })    
    });
    }
    exports.createPilotDetails =(req,res) =>{
        const Pilot = new UserSchema(req.body)
        Pilot.role=1;
        Pilot.save((err, Pilot)=>{
            if(err){
                return res.status(400).json({
                    err: "NOT able to save Pilot in DB"+"Error is"+err
                });
            }
            res.json({
                name: Pilot.name,
                email: Pilot.email,
                id: Pilot._id
            })    
        });
        }
// exports.createPassengerDetails =(req,res) =>{
// const passenger = new UserSchema(req.body)
// passenger.role = 3;
// passenger.save()
// .then((passenger)=>{
//     return {
//         passengername: passenger.firstName
//     };
// })
// .catch((err)=>{
//     return{
//         error: "Not able to create passenger"
//     };
// }

// )
// }

// exports.createPilotDetails =(req,res) =>{
//     const pilot = new UserSchema(req.body)
//     pilot.role=1;
//     pilot.save()
//     .then((pilot)=>{
//         return{
//             pilot: pilot.firstName
//         };
//     })
//     .catch((err)=>{
//         return{
//             error: "Not able to create pilot"
//         };  
//     })
//     }

