console.log("\nPromises & Callbacks - Nivell 3 - Exercici 1:\n");

/////////////////////////////////////////////////////////////////

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
    name: 'Mark Zuckerberg'
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

const getEmployees = id => {
    return new Promise((resolve, reject) => {

        const employee = employees.find(e => e.id === id);

        if (employee) {
            resolve(employee)
        } else {
            reject(`L'usuari ${id} no existeix`)
        }
    })
}

const getSalario = obj => {
    return new Promise((resolve, reject) => {

        const salari = salaries.find(s => s.id === obj.id)?.salary;

        if (salari) {
            resolve(salari)
        } else {
            reject(`No existeix un sou associat per la id ${obj.id}.`)
        }
    })
}

/*//////////
    PROVES
*///////////

const id_1 = 1; //existeix 
const id_5 = 5; //Si usuari no existeix saltarà reject de getEmployees
const id_4 = 4; //Si usuari no té sou assignat saltarà reject de getSalario


getEmployees(id_4)
    .then(employee => {
        return getSalario(employee)
    })
    .then(salari => console.log(`El salari és de ${salari}.`))
    .catch(error => console.log(error))

    //COMENTARIS PROFE

    /*  
    Al N3 veig que fas algunes de les coses que comento,
    per això en aquestes entregues és millor fer un sol arxiu 
    per tots els exercicis (t'estalvies duplicar i fer variacions de codi). 
    Also, et podries estalviar el return i els {} del callback de la línia 67 
    (les arrow functions ja fan un return si només hi ha una línia)
    */