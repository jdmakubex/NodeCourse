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

                const lugarSel = lugares.find( l => l.id === id );

                

                

                // Clima

                //Mostrar resultados

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', );
                console.log('Mínima: ', );
                console.log('Máxima', );


            break;

        }

        if (opt !==0) await pausa();

    } while (opt !==0) 
}

main();