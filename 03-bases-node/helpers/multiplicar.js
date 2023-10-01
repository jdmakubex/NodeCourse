const fs = require('fs');

// Con async vierto la función en promesa
const crearArchivo = async(base,listar=false) => {
    //metemos todo en un try y catch para el correcto manejo de los errores.
    try {
        console.log('===================');
        console.log(`   Tabla del ${base}`);
        console.log('===================');
        let salida ='';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i}=  ${base*i}\n`;
        }
        //Si listar viene con true, entonces muestra la salida.
        listar ? console.log(salida) : null;
        //Este fragmaneto es para escribir en el archivo el resultado de la salida
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        //Retorno de la promesa
        return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    }


    
}

module.exports = {
    crearArchivo
}