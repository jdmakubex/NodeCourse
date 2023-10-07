require('dotenv').config()

const  { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log(process.env.MAPBOX_KEY) //Para ver esto hay que comentar el main()

const main = async() => {

    //const texto = await leerInput ('Hola: ');
    //console.log( texto );

    const busquedas =  new Busquedas();

    let opt;

    do {

        opt = await inquirerMenu();
        
        switch ( opt ){

            case 1: 
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad( termino );
                //console.log(lugares)
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                //console.log({id});
                if (id === '0') continue;

                const lugarSel = lugares.find( l => l.id === id );

                // Guardar en BD

                busquedas.agregarHistorial(lugarSel.nombre);

                // Clima
                //Ejecutamos la busqueda en la funcion ClimaLugar enviando como parametros
                //la lat y long
                const clima = await busquedas.climaLugar( lugarSel.lat, lugarSel.lng);
                console.log(clima)

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Temperatura Mínima: ', clima.min);
                console.log('Temperatura Máxima', clima.max );
                console.log('El clima está: ', clima.desc.green);


            break;

            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) =>  {
                    const idx = `${ i + 1 }.`.green;
                    console.log( `${ idx } ${ lugar } ` );
                })
            
            break;

        }

        if (opt !==0) await pausa();

    } while (opt !==0) 
}

main();