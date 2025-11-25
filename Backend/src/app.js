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

import UserRoutes from "./routes/UserRoutes.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import SubCategoryRoutes from "./routes/SubCategoryRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";

app.use("/api/users", UserRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/subcategory", SubCategoryRoutes);
app.use("/api/product", ProductRoutes);

export default app;