import User from "../modules/user.js";
import bcrypt from "bcryptjs";

const register = async(req,res)=>{
    try{
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});

        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = await User.create({email,password:hashedPassword});
        res.status(201).json({message:"User registered successfully",newUser});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export default register;
