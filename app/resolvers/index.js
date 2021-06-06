const resolvers = {
    Query: {
        trips: (_, { offset, limit }, { dataSources }) => {
            return dataSources.trips.getTripsOffsetLimit(offset, limit)
        }
    },
    Mutation: {
        createTrip: async(_, { input }, { dataSources }) => {
            const { fromPlaceName, toPlaceName } = input
            const fromLocation = await dataSources.mapBoxAPI.getLocation(fromPlaceName)
            const toLocation = await dataSources.mapBoxAPI.getLocation(toPlaceName)
            const newTrip = {
                fromPlace: {
                    id: fromLocation.id
                },
                toPlace: {
                    id: toLocation.id
                }
            }
            const result = await dataSources.trips.model.create(newTrip)
            return result
        }
    },
    Trip: {
        id: (parent) => {
            return "urn::trip:" + parent.id
        }
    },
    Location: {
        id: (parent) => {
            return "urn::mapbox:" + parent.id
        },
        name: async(parent, _, { dataSources }) => {
            const location = await dataSources.mapBoxAPI.getLocation(parent.id)
            return location.place_name
        }
    }
}
export default resolvers