console.log("\nNode Utils - Nivell 1 - Exercici 1:\n");
console.log("Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon.\n");

/* ___________________________________________________________________________________________________________ */

//** “Promisificación” es una simple transformación. Es la conversión de una función que acepta un callback a una función que devuelve una promesa.

const sleep = require('util').promisify(setTimeout)

const recursiva = async dato => {
    await sleep(1000)
    const cifra = dato

    if (!cifra) {

        console.log("- Es torna a cridar la funció");
        const dato = Math.random(); // s'envia una dada per trencar el bucle 

        return recursiva(dato) 
    }
    return cifra
}

/*/

PROVES

- Si null = recursivitat
- Qualsevol altre data evita recursivitat

*/

const main = async () => {

    const num = await recursiva(null)
    console.log(num);
}

main()




