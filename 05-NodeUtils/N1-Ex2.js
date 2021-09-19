console.log("\nNode Utils - Nivell 1 - Exercici 2:\n");
console.log("Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.\n");

/* ___________________________________________________________________________________ */


const fs = require("fs");

const crearArxiu = name => {
    return new Promise((resolve, reject) => {

        if (Number(name)) {
            reject("No pot ser un número")
        }

        fs.writeFile("arxiu.txt", name, err => {

            if (err) throw(err)
            
            resolve("Arxiu creat correctament")
        })
    })
}


const main = async mess => {

    try {
        const resposta = await crearArxiu(mess);
        console.log(resposta);

    } catch (error) {
        console.log(error);
    }
}


/*/

PROVES

- Si string: resolve ok
- Si número: reject

*/

main("Juan MV")
