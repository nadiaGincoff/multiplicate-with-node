const argv = require('./config/yargs').argv
const colors = require('colors');
const { createFile, listFiles } = require('./multiplicate/multiplicate');


/**
 * Volatile way to access the parameter. 
 */

// let argv = process.argv
// let parametro = argv[2]

//// Separete elements, convert string to an array
// let base = parametro.split('=')[1]


/**
 * Shape with Yargs package. 
 */

let command = argv._[0]

switch( command ) {
    case 'list':
        listFiles(argv.base, argv.limite)
    break;

    case 'create': 
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File create: ${file}`.magenta))
            .catch(err => console.log(err));
    break;

    default: 
        console.log('Command not recognized');
}

console.log(argv)