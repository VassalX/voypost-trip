const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
import Trips from './data-sources/Trips'
import TripsModel from './models/trip.model'
const dbConfig = require('./config/db.config')
const { typeDefs } = require('./typedefs')
const resolvers = require('./resolvers')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4000'
}
mongoose.connect('mongodb://localhost:27017/trip_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the datavase!", err);
    process.exit();
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trips: new Trips(TripsModel)
        }
    },
    cors: corsOptions
});

console.log(server.dataSources)

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});