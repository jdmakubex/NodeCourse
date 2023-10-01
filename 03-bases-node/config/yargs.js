const yargs = require('yargs');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Indica que tabla se va a generar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Indica si se lista o no la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'Este es el numero hasa hasta donde se genera la talbla'
    })
    .check( (argv,options) => {
        if (isNaN(argv.b)){
            //console.log('yargs',argv)
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;