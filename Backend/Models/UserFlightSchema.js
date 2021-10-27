import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const userFlightSchema = new mongoose.Schema(
{
        userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserSchema",
        },
        flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"FlightSchema"
        },
        class:{
        type: String,
        required: true,

        },
        
        numberOfPassengers:{
            type:Number,
            required:true
        },

        ticketNumber:{
            type: mongoose.Schema.Types.ObjectId,
            required:true
        },

        seatNumber:{
            type:String,
            required:true,
            maxlength:3

        }

}
)

module.exports=mongoose.model("userFlightSchema",userFlightSchema);