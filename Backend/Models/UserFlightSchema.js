var mongoose= require('mongoose') ;


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
        passengers:{
            type:Array,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        numberOfPassengers:{
            type:Number,
            required:true
        },

        ticketNumber:{
            type: mongoose.Schema.Types.ObjectId,
           // required:true
        },
        bookingStatus:{
            type:String
        }

        // seatNumber:{
        //     type:Array,
        //     required:true,
        //    // maxlength:3

        // }

},{collection:'UserFlightSchema'}
)

module.exports=mongoose.model("UserFlightSchema",userFlightSchema);