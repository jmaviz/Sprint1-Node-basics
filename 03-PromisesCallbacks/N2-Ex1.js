console.log("\nPromises & Callbacks - Nivell 2 - Exercici 1:\n");

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

const getEmployees = id => {
    return new Promise((resolve, reject) => {

        const employee = employees.find(e => e.id === id);

        if (employee) {
            resolve(employee)
        }
    })
}

/*//////////
    PROVES
*///////////

const id_1 = 2;

getEmployees(id_1)
    .then(employee => console.log(employee))
