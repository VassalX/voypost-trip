const { ApolloServer } = require('apollo-server')
const { MongoClient } = require('mongodb')
const Trips = require('./data-sources/Trips')
const dbConfig = require('./config/db.config')
const { typeDefs } = require('./typedefs')

const resolvers = require('./resolvers');

const client = new MongoClient(dbConfig.url);
client.connect();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        trips: new Trips(client.db().collection('trips'))
    }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});