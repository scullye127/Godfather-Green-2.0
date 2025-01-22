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
        res.json({success:true, message:"Weed added"})
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
const removeWeed = async (req, res) => {}


export {addWeed, listWeed, removeWeed}