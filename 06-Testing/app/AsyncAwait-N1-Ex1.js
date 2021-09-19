console.log("\nAsync/Await - Nivell 1 - Exercici 1:\n");
console.log(`Donats els objectes Employees i Salaries, creu una arrow function 
getEmpleado que retorni una Promise efectuant la cerca en
l'objecte pel seu id. Creu una altra arrow function getSalario que 
rebi com a paràmetre un objecte Employee i retorni el seu salari.`);

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
            resolve(empleat)
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
            reject(`L'empleat amb id ${empleado.id} no té cap salari associat`)
        }
    })
}

/*//////////
    PROVA
*///////////

const id_1 = 1;


getEmpleado(id_1)
    .then( empleat => {
        return getSalario(empleat)
    })
    .then(salari => console.log(`El salari de l'usuari és de ${salari}.`))
    .catch(error => console.log(error))


    module.exports = {
        getEmpleado, getSalario}
