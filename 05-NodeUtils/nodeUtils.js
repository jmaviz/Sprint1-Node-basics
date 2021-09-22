console.log("\nNODE UTILS EXERCICIS:\n");

const fs = require("fs");
const zlib = require('zlib');
const stream = require('stream');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os');
const { Buffer } = require('buffer');

//encriptar/desencriptar
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = '1234';
const iv = Buffer.alloc(16, 0);


const recursiva = dada => {

    setTimeout(() => {

        if (!dada) {
            const nouValor = 10; // 
            return recursiva(nouValor)
        }
        console.log("\nFuncio recursiva: El valor ara es de 10\n");
    }, 1000);
}


const crearArxiu = (dades, arxiunom) => {

    fs.writeFile(arxiunom, dades, err => {

        if (err) throw (err)

        console.log(`Arxiu creat: ${arxiunom}`);
    })
}


const readFile = file => {

    fs.readFile(file, "utf8", (err, data) => {

        if (err) throw err;

        console.log(`Arxiu.txt llegit: ${data}`);
    })
}


const comprimirArxiu = (input, output) => {

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(input);
    const destination = fs.createWriteStream(output);

    stream.pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    })
}


const dirExample = async () => {
    const { stdout } = await exec("dir " + os.homedir());
    console.log('stdout:', stdout);
}


const crearArxiusCodif = file => {

    const buf = Buffer.from(file, 'utf8');
    const hexa_dades = buf.toString("hex");
    const base_dades = buf.toString("base64");
    crearArxiu(hexa_dades, "arxiuhexa");
    crearArxiu(base_dades, "arxiubase");
    return "Arxiu codificat en hex i base OK"
}


const eliminarArxiu = () => {

    fs.rm("arxiu.txt", (err) => {
        if (err) throw (err);

        console.log("arxiu.txt esborrat OK");
    })
}


const encriptarArxiu = (arxiuTipus, arxiuResultat) => {

    crypto.scrypt(password, 'salt', 24, (err, key) => {

        if (err) throw err;

        crypto.randomFill(iv, (err, iv) => {

            if (err) throw err;

            const cipher = crypto.createCipheriv(algorithm, key, iv);
            const input = fs.createReadStream(arxiuTipus);
            const output = fs.createWriteStream(arxiuResultat);

            stream.pipeline(input, cipher, output, (err) => {
                if (err) throw err;
            });
        });
    });
    return `${arxiuTipus} encriptat OK`
}


const desEncriptarArxiu = (arxiuTipus, arxiuResultat) => {

    const key = crypto.scryptSync(password, 'salt', 24);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const input = fs.createReadStream(arxiuTipus);
    const output = fs.createWriteStream(arxiuResultat);
    input.pipe(decipher).pipe(output);

    return `${arxiuTipus} desencriptat OK`
}



recursiva(null);
dirExample()
crearArxiu("Juan MV", "arxiu.txt");
readFile("arxiu.txt");
comprimirArxiu("arxiu.txt", "arxiu.txt.gz")
crearArxiusCodif("arxiu.txt")
encriptarArxiu("arxiuhexa", "arxiuhexa.enc")
eliminarArxiu()

// desEncriptarArxiu("arxiuhexa.enc", "arxiuhexa")
