import jwt from "jsonwebtoken";
import User from "../models/user";
import verify from "../middelware/authmiddleware";

export const logout = async(req,res)=>{
    try{
        if(req.user){
            await User.findByIdAndUpdate(req.user._id,{
                $unset:{refreshToken:1}
            });
        }
        res.clearCookie("refreshToken");
        req.clearCookie("accessToken");
        res.json({message:"User logged out successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
        