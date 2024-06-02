import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://Haircutterm:Haircutterms5789@cluster0.yjvxcyd.mongodb.net/haircutterms').then(()=>console.log("DB Connected"));
}