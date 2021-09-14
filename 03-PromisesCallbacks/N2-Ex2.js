console.log("\nPromises & Callbacks - Nivell 2 - Exercici 2:\n");

/////////////////////////////////////////////////////////////////

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

const getSalario = obj => {
    return new Promise((resolve, reject) => {

        const salari = salaries.find(s => s.salary === obj.salary)?.salary;

        if (salari) {
            resolve(salari)
        } 
    })
}

/*//////////
    PROVES
*///////////

const usuari_1 = { id: 1, salary: 4000 }; 

getSalario(usuari_1)
    .then(salari => console.log(`El salari és de ${salari} euros.`))


//COMENTARIS PROFE
//La funció del N2 E2 ha de rebre un objecte de l'altre array, no del dels salaris