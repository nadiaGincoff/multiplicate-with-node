const fs = require('fs');
const colors = require('colors');

/**
 * fs.WriteFile() asynchronously writes data to a file 
 * Params:
 * 1- File: File's name/ path
 * 2- Data: What we want to record
 * 3- Callback: check if it was executed or not
 */

let createFile = (base, limit = 10) => {

    return new Promise ((resolve, reject) => {
        
        if (!Number(base)) {
            reject(`The entered value ${ base }, is not a number`)
            return;
        }

        let data = '';
        for(let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}.txt`, console.log(data))
        });
    });
}

let listFiles = (base, limit) => {
    console.log('******************'.magenta)
    console.log(`Number table ${base}`.white)
    console.log('******************'.magenta)
    for(let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

module.exports = {
    listFiles,
    createFile,
}
