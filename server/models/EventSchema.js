import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    firsBlockTitle: String,
    firstBlockDescription: String,
    firstBlockImg: String,
    secondBlockTitle: String,
    secondBlockDescription: String,
    secondBlockImg: String,
    sammery: String,
    startDate: String,
    endDate: String,
    cardDescription: String
})

export default mongoose.model('EventSchema', EventSchema);