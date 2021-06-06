const { RESTDataSource } = require('apollo-datasource-rest')

class MapBoxAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.mapbox.com';
        this.access_token = 'pk.eyJ1IjoidmFzc2FseCIsImEiOiJja3BsYjVydTcwOW1xMm9uMnZ1ZmpqbmtnIn0.WACztxF1cXpJdtBqayLMQw'
    }

    async getLocation(name) {
        result = this.get(`/geocoding/v5/mapbox.places/${name}.json?limit=1&access_token=${this.access_token}`)
        console.log(result)
        return result;
    }
}