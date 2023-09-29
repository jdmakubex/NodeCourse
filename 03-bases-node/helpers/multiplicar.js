const fs = require('fs');

const crearArchivo = (base = 5 ) => {
    console.log('===================');
    console.log(`   Tabla del ${base}`);
    console.log('===================');
    let salida ='';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i}=  ${base*i}\n`;
    }

    console.log(salida);
    //Este fragmaneto es para escribir en el archivo el resultado de la salida
    fs.writeFileSync(`tabla-${base}.txt`, salida);
        console.log(`tabla-${base}.txt creada`);
}

module.exports = {
    crearArchivo: crearArchivo
}