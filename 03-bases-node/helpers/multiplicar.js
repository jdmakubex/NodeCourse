const fs = require('fs');
const colors = require('colors');

// Con async vierto la función en promesa
const crearArchivo = async(base,listar=false,hasta=10) => {
    //metemos todo en un try y catch para el correcto manejo de los errores.
    try {
        console.log('==================='.green);
        console.log('   Tabla del'.green, colors.blue(base));
        console.log('==================='.green);
        let salida ='';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} =  ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.red}  ${base*i}\n`;
        }
        //Si listar viene con true, entonces muestra la salida.
        listar ? console.log(consola) : null;
        //Este fragmaneto es para escribir en el archivo el resultado de la salida
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        //Retorno de la promesa
        return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    } 
}

module.exports = {
    crearArchivo
}