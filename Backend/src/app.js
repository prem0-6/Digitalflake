import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    allowedHeaders:["Content-Type","Authorization"]
}));
app.use(cookieParser());
export default app;