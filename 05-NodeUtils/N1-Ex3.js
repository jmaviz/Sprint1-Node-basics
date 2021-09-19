console.log("\nNode Utils - Nivell 1 - Exercici 3:\n");
console.log("Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.\n");
/* ___________________________________________________________________________________ */

const fs = require("fs");


const readFile = (file, comp) => {
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



// Funció comprovar existencia de l'arxiu

const fileExists = file => { 
    return new Promise((resolve) => {
        fs.access(file, fs.constants.F_OK, (err) => {
            err ? resolve(false) : resolve(true)
        });
    })
}

const main = async file => {

    try {
        const comp = await fileExists(file)
        const resultat = await readFile(file, comp)
        console.log(resultat);

    } catch (error) {
        console.log(error);
    }
}

/*/

PROVES

- existeix arxiu: resolve
- no existeix arxiu: reject

*/



main("arxiu.txt")




