const fs = require('fs');

const axios = require('axios');


class Busquedas {
    historial = [];
    dbPath = './db/database.json';

    constructor() {
        //TODO: leer DB si existe
        this.leerDB();
    }

    get historialCapitalizado(){
        // Capitalizar cada palabra
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ')
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1));

            return palabras.join(' ')
        })
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'country': 'mx',
            'limit': 5,
            'language': 'es'
        }

    }

    get paramsWeather(){
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
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

    async climaLugar ( lat, lon ){
        try {
            //instance axios.create()
            const instance = axios .create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                //Hacemos una desestructuración para incluir el envío de lat y long
                // Ya que estos van a a estar cambiando
                params: {...this.paramsWeather, lat, lon}

            });

            // resp.data
            //Obtenemos en los datos y lo almacenamos en resp
            const resp = await instance.get();
            //Probamos si está regresando datos
            //console.log(resp);

            //Desestructuramos los datos para datos de forma mas simple
            const { weather, main} = resp.data;

            return{
                //Observar si el json está contruído como arreglo
                desc: weather[0].description,
                min: main.temp_min,
                max:main.temp_max,
                temp: main.feels_like
            }
        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial( lugar = ''){
        //TODO: Prevenir duplicados
        if( this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        this.historial = this.historial.splice(0,5);
    
        this.historial.unshift(lugar.toLocaleLowerCase());
       

        //Grabar en BD
        this.guardarDB();

    }

    guardarDB(){
        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify(payload));

    }

    leerDB(){
        // debe existir
        if (!fs.existsSync(this.dbPath) ) return;

        const info = fs.readFileSync( this.dbPath, { encoding: 'utf-8'})
        const data = JSON.parse( info );

        this.historial = data.historial;

    }

}

module.exports = Busquedas;