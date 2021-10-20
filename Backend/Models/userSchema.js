import mongoose from 'mongoose';
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
    Address: {
        type: String,
        maxlength: 150,
    },
    EmailId: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    PhoneNumber: {
        type: Number,
        maxlength: 10,
        unique: true,
        required: true
    },
    


}
)