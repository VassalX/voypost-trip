import mongoose from 'mongoose'

const tripsSchema = mongoose.Schema({
    fromPlace: {
        id: String
    },
    toPlace: {
        id: String
    },
})

const trips = mongoose.model('trips', tripsSchema)
export default trips