const UserSchema = require("../Models/userSchema")
const UserFlightSchema = require("../Models/UserFlightSchema")
const FlightSchema = require("../Models/FlightSchema")
const mongoose = require("mongoose");
const userSchema = require("../Models/userSchema");
exports.showFlights = (req, res) => {

    const fromDestination = req.body.departureLocation;
    const toDestination = req.body.arrivalLocation;
    const departureDate = req.body.departureDate;
    const arrivalDate = req.body.arrivalDate;

    return FlightSchema.find({
        departureLocation: fromDestination, arrivalLocation: toDestination,
        departureDate: departureDate, arrivalDate: arrivalDate
    })
        .exec()
        .then((flights) => {
            return res.json(flights);
        })
        .catch(error => {
            return {
                error: "No Flight Found " + error
            };
        })

}

exports.showFlight = (req, res) => {

    const flightNumber = req.body.flightNumber;

    return FlightSchema.find({userId: req.body.userId,flightNumber: flightNumber})
    .exec()
    .then((flights) => {
        return res.json(flights);
    })
    .catch(error=>{
        return {
            error: "No Flight Found "+error
        };
    })
}

exports.cancelBookedFlight = (req, res) => {   
    const ticketNo = parseInt(req.body.ticketNumber);
    return UserFlightSchema.updateOne({ ticketNumber: ticketNo },{$set:{bookingStatus:"cancelled"}})
        .exec()
        .then((userFlight) => {
            return res.json(userFlight);
        })
        .catch(error => {
            return {
                error: "Booking cancellation Failed " + error
            };
        })

}

const CalculateRewardPoints = (currentRewards, price,isRewardApplied) => {
    if(isRewardApplied)
    {
        if((currentRewards-price)<0)
        {
            return (price/100);
        }
        return (currentRewards-price)+(price/100);
    }
    return currentRewards + (price / 100);
}

exports.bookFlight = (req, res) => {
    //console.log(req.body);
    const userFlight = new UserFlightSchema(req.body.bookingDetails);
    rewardPoints = CalculateRewardPoints(req.body.bookingDetails.rewardPoints, req.body.bookingDetails.price,req.body.bookingDetails.isRewardApplied);
    userFlight.rewardPoints = rewardPoints;
    userFlight.save((err, userFlight) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save user flight details in DB" + "Error is" + err
            });
        }
        else{
        userSchema.updateOne({_id:userFlight.userId},{$set:{rewardPoints:userFlight.rewardPoints}})            
        .exec();        
        res.json({
            class: userFlight.class,
            ticketNumber: userFlight.ticketNumber,
            numberOfPassengers: userFlight.numberOfPassengers
        })
    }
    });

}
exports.getCurrentFlights = (req, res) => { }
exports.getUserById = (req, res) => {
    var userId = req.params.userId;
    console.log("user id" + userId);
    // if(mongoose.Types.ObjectId.isValid(userId)) {
    UserSchema.findOne({ _id: userId })
        .then((docs) => {
            if (docs) {
                console.log(docs);
                return res.json({ success: true, data: docs });
            } else {
                res.json({ success: false, msg: "no such user exist" });
            }
        }).catch((err) => {
            console.log(err);
            res.json({ success: false, msg: "error: " + err });
        })
    //   } else {
    //       res.json({"success":false,msg:"please provide correct Id"});          
    //   }

}

