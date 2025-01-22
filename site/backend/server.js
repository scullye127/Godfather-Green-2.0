import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import weedRouter from "./routes/weedRouter.js";



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/weed", weedRouter)

app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Express server started on http://localhost:${port}`)
})

