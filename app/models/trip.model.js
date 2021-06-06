import mongoose from 'mongoose';

const tripsSchema = mongoose.Schema({
    fromPlace: {
        id: Object,
        name: String
    },
    toPlace: {
        id: Object,
        name: String
    },
});

const trips = mongoose.model('trips', tripsSchema);
export default trips;