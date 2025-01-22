import express from 'express'
import {addWeed, listWeed, removeWeed} from "../controllers/weedController.js"
import multer from "multer"

//create router
const weedRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

//Store image in upload folder
const upload = multer({storage:storage})

//Post method
//Sends data to server to be processed
weedRouter.post("/add", upload.single("image"),addWeed)
weedRouter.get("/list", listWeed)
weedRouter.get("/remove", removeWeed)





export default weedRouter;