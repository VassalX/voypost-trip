const { RESTDataSource } = require('apollo-datasource-rest')

export default class MapBoxAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.mapbox.com';
        this.access_token = 'pk.eyJ1IjoidmFzc2FseCIsImEiOiJja3BsYjVydTcwOW1xMm9uMnZ1ZmpqbmtnIn0.WACztxF1cXpJdtBqayLMQw'
    }

    async getLocation(name) {
        const result = await this.get(`/geocoding/v5/mapbox.places/${name}.json?limit=1&access_token=${this.access_token}`)
        return JSON.parse(result);
    }
}