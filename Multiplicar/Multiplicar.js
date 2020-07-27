const fs = require('fs');
const colors = require('colors');
/**
 * Asíncronamente escribe datos en un archivo
 * Params:
 * 1- File: nombre del archivo/ path
 * 2- Data: Lo que queremos grabar
 * 3- Callback: para saber si se ejecuto o no
 */

let crearArchivo = (base, limite = 10) => {

    return new Promise ((resolve, reject) => {
        
        if (!Number(base)) {
            reject(`El valor introducido ${ base }, no es un numero`)
            return;
        }

        let data = '';
        for(let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}.txt`, console.log(data))
        });
    });
}

let listarArchivos = (base, limite) => {
    console.log('******************'.magenta)
    console.log(`Tabla del numero  ${base}`.white)
    console.log('******************'.magenta)
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

module.exports = {
    listarArchivos,
    crearArchivo,
}
