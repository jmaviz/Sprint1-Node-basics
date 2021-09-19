console.log("\nPromises & Callbacks - Nivell 2 - Exercici 3:\n");

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
        }
    })
}

const getSalario = employee => {
    return new Promise((resolve, reject) => {

        const salari = salaries.find(s => s.id === employee.id)?.salary;

        if (salari) {
            resolve(salari)
        }
    })
}

/*//////////
    PROVES
*///////////

const id_1 = 1;

getEmployees(id_1)
    .then(employee => {
        getSalario(employee)
            .then(salari => console.log(`El salari de ${employee.name} és de ${salari}.`))
    })


module.exports = {
    getSalario,
    getEmployees
}