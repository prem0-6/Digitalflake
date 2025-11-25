import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
import app from "./app";
import connectDB from "./db/connect";
const port = process.env.PORT || 8000;
connectDB();
app.listen(port,()=>{
    console.log(`Server Running on ${port}` );
});