module.exports = {
    Query: {
        trips: (_, { offset, limit }, { dataSources }) => {
            return dataSources.trips.getTripsOffsetLimit(offset, limit);
        }
    },
    Mutation: {
        createTrip: async(_, { input }, { dataSources }) => {
            const { fromPlaceName, toPlaceName } = input;
            const loc1 = await dataSources.mapBoxAPI.getLocation(fromPlaceName);
            const loc2 = await dataSources.mapBoxAPI.getLocation(toPlaceName);
            const newTrip = {
                fromPlace: {
                    id: loc1.features[0].id,
                    name: loc1.features[0].place_name
                },
                toPlace: {
                    id: loc2.features[0].id,
                    name: loc2.features[0].place_name
                }
            }
            const result = await dataSources.trips.model.create(newTrip)
            return result
        }
    },
    Trip: {
        id: (id) => {
            return "urn::trip:" + id
        }
    },
    Location: {
        id: (id) => {
            return "urn::mapbox:" + id
        },
        name: (name) => {
            return name
        }
    }
}