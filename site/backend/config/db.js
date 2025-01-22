//Logic to connect with database

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://scullye127:patriots87@cluster0.kcpob.mongodb.net/godfather-green').then(()=>console.log("DB Connected"));
}