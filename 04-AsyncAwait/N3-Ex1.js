
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

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmpleado = id => {
    return new Promise((resolve, reject) => {

        const empleat = employees.find(e => e.id === id);

        if (empleat) {

            setTimeout(() => {
                resolve(empleat)
            }, 2000);

        } else {
            reject(`La id ${id} no existeix`)
        }
    })
}


const getInfoUsuari = async id => {

    try {
        const usuari = await getEmpleado(id);
        return `Usuari ${usuari.name}. Correcte.`

    } catch (error) {
        throw (error)
    }

}


getInfoUsuari(8)
    .then(mess => console.log(mess))
    .catch(err => console.log(err))

