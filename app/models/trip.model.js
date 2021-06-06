import mongoose from 'mongoose';

const tripsSchema = mongoose.Schema({
    fromPlace: {
        id: String,
        name: String
    },
    toPlace: {
        id: String,
        name: String
    },
});

const trips = mongoose.model('trips', tripsSchema);
export default trips;