module.exports = {
    Query: {
        trips(_, { offset, limit }, { dataSources }) {
            return dataSources.trips.getTripsOffsetLimit(offset, limit);
        }
    }
}