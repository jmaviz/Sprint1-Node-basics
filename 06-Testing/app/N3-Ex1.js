
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}, {
    id: 4,
    name:"Juan MV"
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

const getSalario = empleat => {
    return new Promise( (resolve, reject) => {

        const salari = salaries.find( e => e.id === empleat.id)?.salary;

        if (salari) {
            resolve(salari)            
        } else {
            reject(`L'empleat amb id ${empleat.id} no té cap salari associat`)
        }
    })
}

const getInfoUsuari = async id => {

    try {
        const usuari = await getEmpleado(id);
        const salari = await getSalario(usuari)
        return `Usuari ${usuari.name} té un sou de ${salari}`

    } catch (error) {
        throw (error)
    }
}


// getInfoUsuari(8)
//     .then(mess => console.log(mess))
//     .catch(err => console.log(err))

module.exports = {
    getEmpleado,
    getSalario,
    getInfoUsuari
}