console.log("\nPromises & Callbacks - Nivell 1 - Exercici 2:\n");

/////////////////////////////////////////////////////////////////

const getId = (id, callback) => {

    const usuari = {
        id: 1,
        nom: "Joan"
    }

    if (usuari.id === id) {
        return callback(`Id ${id} es correcte. Pots accedir.`)
    } else {
        return callback(`Id ${id} es incorrecte. Error.`)
    }
}

/*//////////
    PROVES
*///////////

getId(1, missatge => console.log(missatge));

getId(2, missatge => console.log(missatge));
