const user = require("../Models/userSchema")
const UserFlightSchema = require("../Models/UserFlightSchema")

exports.bookFlight = (req,res) => {
    const userFlight= new UserFlightSchema(req.body);
    userFlight.save((err, userFlight)=>{
        if(err){
            return res.status(400).json({
                err: "NOT able to save user flight details in DB"+"Error is"+err
            });
        }
        res.json({
            class: userFlight.class,
            ticketNumber: userFlight.ticketNumber,
            numberOfPassengers: userFlight.numberOfPassengers
        })    
    });

}
exports.getCurrentFlights = (req,res) => {}
exports.getUserById = (req,res) => {}


