import jwt from "jsonwebtoken";
import User from "../modules/user.js";
import verify from "../middelware/authmiddleware.js";

const logout = async(req,res)=>{
    try{
        if(req.user){
            await User.findByIdAndUpdate(req.user._id,{
                $unset:{refreshToken:1}
            });
        }
        res.clearCookie("refreshToken");
        res.clearCookie("accessToken");
        res.json({message:"User logged out successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
        export default logout;
