const argv = require('./config/yargs');
const multiplicar = require('./helpers/multiplicar');
const colors = require('colors');

console.clear();

multiplicar(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo.red, 'fue creada con exito'))
    .catch(err => console.log(err));