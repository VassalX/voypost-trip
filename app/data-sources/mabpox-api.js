import { RESTDataSource } from 'apollo-datasource-rest'
import mapBoxConfig from '../config/mapbox.config'

export default class MapBoxAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.mapbox.com'
        this.accessToken = mapBoxConfig.accessToken
    }

    async getLocation(name) {
        const result = await this.get(`/geocoding/v5/mapbox.places/${name}.json?limit=1&access_token=${this.accessToken}`)
        return JSON.parse(result).features[0]
    }
}