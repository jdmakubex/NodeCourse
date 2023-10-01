//const { error } = require('console');
const yargs = require('yargs');
const {crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .check( (argv,options) => {
                    if (isNaN(argv.b)){
                        //console.log('yargs',argv)
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv;

console.clear();
//const base =6;

//console.log(process.argv)
console.log(argv)

crearArchivo ( argv.base,argv.l )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
