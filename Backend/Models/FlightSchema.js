var mongoose= require('mongoose') ;
const { Schema } = mongoose;

const FlightSchema = new Schema({
  flightNumber: {
    type: Number,
    required:true,
    maxlength: 30,    
    unique: true
  },
  // pilotId: {
  //   type: Array,
  //   required: true,
  //   maxlength: 15    
  // },
  arrivalLocation:{
    type: String,
    required: true,
    maxlength: 50   
  },
  departureLocation:{
    type: String,
    required: true,
    maxlength: 50   
  },
  arrivalDate:{
    type: String,
    required: true,
    maxlength: 50   
  },
  departureDate:{
    type: String,
    required: true,
    maxlength: 50   
  },
  // status:{
  //   type:String,
  //   required:true,
  //   maxlength:30
  // },
  createdDateTime:{
    type: Date,
    required: true,
    maxlength: 50,
    default:Date.now  
  },
  modifiedDataTime:{
    type: Date,
    required: true,
    maxlength: 50 ,
    default:Date.now 
  },
  arrivalTime:{
    type: String,
    required: true,
    maxlength: 50 
  },
  departureTime:{
    type: String,
    required: true,
    maxlength: 50 
  },
  status:{
    type:String,
    required:true,
    maxlength:30
  },
  price:{
    type: Number,
    required: true,
    default: 0
  }
});

module.exports=mongoose.model("FlightSchema",FlightSchema);