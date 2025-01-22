import express from "express"
import cors from "cors"



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Express server started on http://localhost:${port}`)
})

//mongodb+srv://scullye127:patriots87@cluster0.kcpob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0