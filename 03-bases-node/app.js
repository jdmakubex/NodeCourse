/**
 * Correr app.js así:  node app.js -b 2 -l
 */

//const { error } = require('console');

const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
console.clear();
//const base =6;

//console.log(process.argv)
//console.log(argv)

crearArchivo ( argv.base,argv.l, argv.hasta )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
