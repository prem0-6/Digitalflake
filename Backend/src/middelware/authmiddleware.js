import jwt from "jsonwebtoken";
import User from "../modules/user.js";
const verify = async(req,res,next)=>{
    try{
        const token = req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"InvalidToken"});
        }
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findOne({email:decoded.email});
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        req.user = user;
        next();

    }
    catch(error){
        res.status(401).json({message:"Unauthorized"});
    }

}
export default verify;