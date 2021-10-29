import mongoose from "mongoose"

const CarSchema = new mongoose.Schema({
    imgCar: String,
    titleCar: String,
    descriptionCar: String,
    priceCar: String
})

export default mongoose.model('CarSchema', CarSchema);