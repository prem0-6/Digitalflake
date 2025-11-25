import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Userlogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }
        const accessToken = jwt.sign({email:user.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"2d"});
        const refreshToken = jwt.sign({email:user.email},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"});
        user.refreshToken = refreshToken;
        await user.save();
        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            Secure:true,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        res.json({message:"User logged in successfully",accessToken});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

}
export default Userlogin;
