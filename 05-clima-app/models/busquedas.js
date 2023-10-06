const axios = require('axios');


class Busquedas {
    historial = ['Oaxaca','Puebla','Veracruz','Chiapas','Guerrero','Campeche'];

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'country': 'mx',
            'limit': 5,
            'language': 'es'
        }

    }
    async ciudad (lugar = ''){

        try {
            //peticion http
            /**
             * Axios, es una lbrería que se usa para hacer peticiones HTTP, ya que reques ya se está quedando obsoleta
             * En el siguiente ejemplo hacemos una petición get a un endpoint para solicitarle información
             */
            //Ejemplo de como implementar una petición get de con axios
            const instance = axios .create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            //console.log(resp.data.features)

            
            return resp.data.features.map( lugar =>({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

            

        } catch (error) {
            //return []; 
        }
    }

}

module.exports = Busquedas;