console.log("\nNode Utils - Nivell 2 - Exercici 1:\n");
console.log("Creu una funció que comprimeixi el file del nivell 1");
console.log("Creu una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes.\n");

/* _____________________________________________________________________________________________________________________ */

//IMPORTS

//imports zip
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { promisify } = require('util');
const pipe = promisify(pipeline);

//imports child process
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//import per ruta de SO
const os = require('os');


const compressFile = (input, output) => {

    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    return pipe(source, gzip, destination);
}


const dirExample = async () => {
    const { stdout, stderr } = await exec("dir " + os.homedir());
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
}


const main = async (input, output) => {

    try {

        await compressFile(input, output);
        console.log("\nArxiu comprimit correctament\n");
        await dirExample();
        console.log("\nDirectori llistat correctament\n");

    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
}


/* PROVES

- existeix arxiu: try ok
- no existeix arxiu: catch

*/

main("arxiu.txt", "arxiu.txt.gz") //arg1 arxiu existent arg2 nom arxiu que es crea