const flight = require("../Models/FlightSchema");
const admin = require("../Models/userSchema");
const flightschema = require("../Models/FlightSchema");
exports.createFight=(req,res) =>{

}
exports.editFight=(req,res) =>{

}
exports.editFights=(req,res) =>{

}
exports.deleteFight=(req,res) =>{

}
exports.deleteFights=(req,res) =>{

}
exports.getAllFights=(req,res) =>{

}
exports.getFight=(req,res) =>{

}
exports.getFlightById =(req,res) =>{

}
exports.passengerDetails =(req,res) =>{

}
exports.pilotDetails =(req,res) =>{

}
exports.createairhostessDetails =(req,res) =>{
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

