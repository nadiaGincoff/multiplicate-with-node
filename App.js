const argv = require('./config/yargs').argv
const colors = require('colors');
const { crearArchivo, listarArchivos } = require('./Multiplicar/Multiplicar');


/**
 * Forma volatil de acceder al parametro. 
 */

// let argv = process.argv
// let parametro = argv[2]

// // Separo elementos, convierto un string a un array 
// let base = parametro.split('=')[1]


/**
 * Forma con paquete Yargs. 
 */

let comando = argv._[0]

switch( comando ) {
    case 'listar':
        listarArchivos(argv.base, argv.limite)
    break;

    case 'crear': 
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.magenta))
            .catch(err => console.log(err));
    break;

    default: 
        console.log('Comando no reconocido');
}

console.log(argv)