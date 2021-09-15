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
    return new Promise((resolve, reject) => {

        const salari = salaries.find(e => e.id === empleat.id)?.salary;

        if (salari) {
            resolve(salari)
        } else {
            reject(`L'empleat amb id ${empleado.id} no té cap salari associat`)
        }
    })
}



const getInfo = async id => {

    try {

        const empleado = await getEmpleado(id)
        const salari = await getSalario(empleado)

        console.log(`L'usuari ${empleado.name} cobra ${salari} euros.`);
        
    } catch (error) {
        console.log(error);
    }
}


getInfo(1)
