const { MongoDataSource } = require('apollo-datasource-mongodb')

export default class Trips extends MongoDataSource {
    getTripsOffsetLimit(offset, limit) {
        return this.find().skip(offset).limit(limit);
    }
}