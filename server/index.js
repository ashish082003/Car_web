import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import carRoutes from './routes/carRoutes.js';

const app=express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/cars",carRoutes);

app.get("/",(req,res)=>{
    res.send('Car Management Api is running!');
});


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server runing on port ${PORT}`);
})