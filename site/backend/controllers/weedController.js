import weedModel from "../models/weedModel.js";
import fs from 'fs'


// add weed item
//Store product data in database
const addWeed = async (req, res) => {

    let image_filename = `${req.file.filename}`

    const weed = new weedModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await weed.save();
        res.json({success:true, message:"Product added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Add Error"})
    }
}

// list all weed items
const listWeed = async (req, res) => {
    try{
        const foods = await weedModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"List Error"})
    }
}

// Remove weed item
const removeWeed = async (req, res) => {
    try {
        const weed = await weedModel.findById(req.body.id)
        fs.unlink(`uploads/${weed.image}`,()=>{})

        await weedModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Product removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Remove error"})
    }
}


export {addWeed, listWeed, removeWeed}