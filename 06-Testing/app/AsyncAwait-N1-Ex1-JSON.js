

const getEmpleado = id => {
    return new Promise((resolve, reject) => {

        const fs = require('fs');
        fs.readFile('../app/employee.json', (err, data) => {

            if (err) throw err;

            const employee = JSON.parse(data)
            const empleat = employee.find(e => e.id === id);

            if (empleat) {
                resolve(empleat)
            } else {
                reject(`La id ${id} no existeix`)
            }
        });
    })
}

// const getSalario = empleat => {
//     return new Promise((resolve, reject) => {

//         fs.readFile('salaries.json', (err, data) => {

//             if (err) throw err;

//             const salaries = JSON.parse(data)
//             const salari = salaries.find(e => e.id === empleat.id)?.salary;

//             if (salari) {
//                 resolve(salari)
//             } else {
//                 reject(`L'empleat amb id ${empleado.id} no té cap salari associat`)
//             }
//         })
//     });
// }

getEmpleado(1)
    .then(empleat => console.log(empleat))

    .catch(error => console.log(error))


module.exports = {
    getEmpleado
}
