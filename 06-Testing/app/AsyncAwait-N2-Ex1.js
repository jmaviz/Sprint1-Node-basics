console.log("\nAsync/Await - Nivell 2 - Exercici 1:\n");
console.log("Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons.");

////////////////////////////////////////////////////////

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];


const getUsuari = id_ => {
    return new Promise((resolve, reject) => {

        const usuari = employees.find(empleat => empleat.id === id_)

        if (usuari) {

            setTimeout(() => {
                resolve(usuari)
            }, 2000);
        } else {
            reject("Esta id no existe")
        }
    })
}


const getInfo = async (id_) => {

    try {
        const usuari = await getUsuari(id_);
        return usuari;

    } catch (error) {
        throw(error)
    }

}

/*//////////
    PROVA
*///////////

// const id = 1;

// getInfo(id)
//     .then(usuari => console.log(usuari))

module.exports = {
    getUsuari,
    getInfo
}


