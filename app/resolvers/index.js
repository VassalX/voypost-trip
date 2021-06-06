module.exports = {
    Query: {
        trips(_, { offset, limit }, { dataSources }) {
            return dataSources.trips.getTripsOffsetLimit(offset, limit);
        }
    },
    Mutation: {
        createTrip(_, { input }, { dataSources }) {
            const { fromPlaceName, toPlaceName } = input;
            return dataSources.trips.model.create()
        }
    },
    Trip: {
        id(id) {
            return "urn::trip:" + id
        }
    },
    Location: {
        id(id) {
            return id
        },
        name(name) {
            return name
        }
    }
}