import mongoose from "mongoose";

//Weed schema
const weedSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true}
})

//Weed model
const weedModel = mongoose.models.food || mongoose.model("weed", weedSchema);

export default weedModel;