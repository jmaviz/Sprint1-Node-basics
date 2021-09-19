console.log("\nAsync/Await - Nivell 2 - Exercici 1:\n");

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


// const getUsuari = id_ => {
//     return new Promise((resolve, reject) => {

//         const usuari = employees.find(empleat => empleat.id === id_)

//         if (usuari) {

//             setTimeout(() => {
//                 resolve(usuari)
//             }, 2000);
//         }
//     })
// }

const getUsuari = (id_, callback) => {

    const usuari = employees.find(empleat => empleat.id === id_)

    if (usuari) {

        setTimeout(() => {
            callback(usuari)
        }, 2000);
    }
}


const getInfo = async id_ => {

    const usuari = await getUsuari(id_);
}

    
// /*//////////
//     PROVA
// *///////////

// const id = 1;

// getInfo(id)
// .then(message => console.log(message))

 module.exports = {
     getUsuari,
     getInfo
 }
