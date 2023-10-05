const axios = require('axios');


class Busquedas {
    historial = ['Oaxaca','Puebla','Veracruz','Chiapas','Guerrero','Campeche'];

    constructor() {
        //TODO: leer DB si existe
    }
    async ciudad (lugar = ''){

        try {
            //peticion http
            //console.log('ciudad', lugar)

            /**
             * Axios, es una lbrería que se usa para hacer peticiones HTTP, ya que reques ya se está quedando obsoleta
             * En el siguiente ejemplo hacemos una petición get a un endpoint para solicitarle información
             */
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Oaxaca.json?country=mx&limit=5&language=es&access_token=pk.eyJ1IjoiamRtYWt1YmV4IiwiYSI6ImNsbmRnZXp0OTA0a2gyaXVwa2I2NDMzMTQifQ.pk99Qj6WT9JHBhskPBCNcQ');
            console.log(resp.data);

            

        } catch (error) {
            return []; 
        }

       
        
    }

}

module.exports = Busquedas;