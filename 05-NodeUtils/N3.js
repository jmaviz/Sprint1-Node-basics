console.log("\nNode Utils - Nivell 3 \n");
console.log("Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.\n");
console.log("Creu una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.\n");
console.log("Creu una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.\n");

/* ________________________________________________________________________________________________________________________ */
const fs = require("fs");
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream');
const { scrypt, randomFill, createCipheriv, crypto } = require('crypto');
const { scryptSync, createDecipheriv } = require('crypto');

const { Buffer } = require('buffer');
  
const algorithm = 'aes-192-cbc';
const password = '1234';
const iv = Buffer.alloc(16, 0); 


const readFile = (file, comp, tipus) => {
    return new Promise((resolve, reject) => {

        if (comp) {
            fs.readFile(file, "utf8", (err, data) => {

                if (err) throw err;

                resolve(data);
            })

        } else {
            reject("L'arxiu no existeix.")
        }
    })
}

const crearArxiu = (name, arxiu_nom) => {
    return new Promise((resolve, reject) => {

        if (Number(name)) {
            reject("No pot ser un número")
        }

        fs.writeFile(`${arxiu_nom}`, name, err => {

            if (err) throw (err)

            resolve(`Arxiu ${arxiu_nom} creat correctament`)
        })
    })
}

const fileExists = file => {
    return new Promise((resolve) => {
        fs.access(file, fs.constants.F_OK, (err) => {
            err ? resolve(false) : resolve(true)
        });
    })
}

const crearArxiusCodif = async (file, arxiu_hex, arxiu_base) => {

    try {
        const comp = await fileExists(file)
        const resultat = await readFile(file, comp)
        const buf = Buffer.from(resultat, 'utf8');
        const hexa_dades = buf.toString("hex");
        const base_dades = buf.toString("base64");

        await crearArxiu(base_dades, arxiu_base);
        await crearArxiu(hexa_dades, arxiu_hex);

        return "Arxiu codificat en hex i base OK"

    } catch (err) {
        throw (err)
    }
}

const eliminarArxiu = () => {

    return new Promise((resolve) => {

        fs.rm("arxiu.txt", (err) => {
            if (err) throw (err);

            resolve("Arxiu esborrat OK")
        })
    })
}


const encriptarArxiu = async (arxiuTipus, arxiuResultat) => {

      scrypt(password, 'salt', 24, (err, key) => {
        
        if (err) throw err;

        randomFill(iv, (err, iv) => {
          
            if (err) throw err;
      
          const cipher = createCipheriv(algorithm, key, iv);
          const input = createReadStream(arxiuTipus);
          const output = createWriteStream(arxiuResultat);
      
          pipeline(input, cipher, output, (err) => {
            if (err) throw err;
          });
        });
      });
      
  return `${arxiuTipus} encriptat OK`
}


const desEncriptarArxiu = async (arxiuTipus, arxiuResultat) => {

      const key = scryptSync(password, 'salt', 24);
      const decipher = createDecipheriv(algorithm, key, iv);
      const input = createReadStream(arxiuTipus);
      const output = createWriteStream(arxiuResultat);
      input.pipe(decipher).pipe(output);

  return `${arxiuTipus} desencriptat OK`
}

//OPCIO1

crearArxiusCodif("arxiu.txt", "arxiu_hex.txt", "arxiu_base.txt")
    .then(mess => {
        console.log(mess);
        return encriptarArxiu("arxiu_base.txt", "arxiu_base_enc.txt")
    })
    .then(mess=> {
        console.log(mess);
        return encriptarArxiu("arxiu_hex.txt", "arxiu_hex_enc.txt")
    })
    .then(mess => {
        console.log(mess);
        return eliminarArxiu()
    })
    .then( mess => {
        console.log(mess);
    })
    .catch(err => console.log(err))


