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
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            

        } catch (error) {
            return []; 
        }

       
        
    }

}

module.exports = Busquedas;