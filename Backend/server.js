import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import "dotenv/config.js"
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js"
import productRouter from "./routes/productRoute.js";

//app config
const app=express();
const port=4000;    

app.use(cors(
    {
        origin:["link"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/cart",cartRouter)
app.use("/api/user",userRouter)
app.use("/api/order",orderRouter)
app.use("/images",express.static("uploads"));
app.use("/api/product",productRouter);



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})