var mongoose= require('mongoose') ;
const crypto = require('crypto');
const { v1: uuidv1 } = require("uuid");
const userSchema = new mongoose.Schema(
{
        firstName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
      lastName: {
        type: String,
        required: true,
        maxlength: 32,
        true: true
    },
    address: {
        type: String,
        maxlength: 150,
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: String,
        maxlength: 10,
        required: true
    },

      encry_password: {        type: String,
        required: true
      },
    role: {
        type: Number,
        default: 0
      },
    rewardPoints: {
        type: Number,
        default: 0
    },
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"FlightSchema"
    },
    salt: String
 }
)


userSchema.virtual('password').
set(function(password){
  this._password=password;
  this.salt = uuidv1();
  this.encry_password = this.securePassword(password)
})
.get(function(){
  return this._password;
})
userSchema.methods = {
securePassword: function(plainpassword){
  if(plainpassword=="")
    return "";
  try {
    const secret = this.salt;
    return crypto.createHmac('sha256', secret)
                 .update(plainpassword)
                 .digest('hex');
  } catch (error) {
    return "";
  }
},
authenticate: function(plainpassword){
    return this.securePassword(plainpassword)===this.encry_password;
}
}

module.exports = mongoose.model("UserSchema",userSchema);