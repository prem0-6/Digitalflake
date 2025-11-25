import mongoose, { trusted } from "mongoose";
const UserSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true,
    },
    password : {
        type:String,
        required:true,
    },
    refreshToken : {
        type:String,
    }
},{
    timestamps:true,
});
const User = mongoose.model("User",UserSchema);
module.exports = User;
