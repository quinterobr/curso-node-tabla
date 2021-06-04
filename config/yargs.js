const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'La base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        description: 'Muestra la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        demandOption: 10,
        description: 'Limite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw new Error("La base debe de ser un número");
        }
        return true;
    })
    .argv;

module.exports = argv;