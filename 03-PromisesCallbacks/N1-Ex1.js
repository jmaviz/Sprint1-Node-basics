console.log("\nPromises & Callbacks - Nivell 1 - Exercici 1:\n");

/////////////////////////////////////////////////////////////////

function funcioPromise(num) {
    return new Promise((resolve, reject) => {

        if (num === 10) {
            resolve(`Correcte, el número es igual a ${num}`)
        } else {
            reject(`Error. No és igual`)
        }
    })
}

/*//////////
    PROVES
*///////////

const num_1 = 11;
const num_2 = 10;


funcioPromise(num_1)
    .then(missatge => console.log(missatge))
    .catch(err => console.log(err));

funcioPromise(num_2)
    .then(missatge => console.log(missatge))
    .catch(err => console.log(err));