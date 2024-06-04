import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import "dotenv/config.js"
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js"
import productRouter from "./routes/productRoute.js";





app.use(cors());






const app=express();
const port=4000;    

// server.js

module.exports = async (req, res) => {
    // Backend işlevselliğini burada tanımla
    res.status(200).json({ message: "Backend işlevselliği çalışıyor!" });
  };
  

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