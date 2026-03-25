import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    credits:{
        type: Number,
        default: 50
    }
}, {timeStamps: true})

const userModel = mongoose.model('Users', userSchema)

export default userModel