import mongoose from "mongoose"

const CarSchemaLastCar = new mongoose.Schema({
    imgCar: String,
    titleCar: String,
    descriptionCar: String,
    priceCar: String
})

export default mongoose.model('CarSchemaLastCar', CarSchemaLastCar);