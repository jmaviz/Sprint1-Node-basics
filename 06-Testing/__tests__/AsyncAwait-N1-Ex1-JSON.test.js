console.log("\nTEST: Async/Await mockeando el fitxer JSON - Nivell 1 - Exercici 1:\n");
////////////////////////////////////////////////////////

// const { getEmpleado } = require('../app/AsyncAwait-N1-Ex1-JSON.js');




// test('Retorna objecte que coincideixi amb id 1', () => {
//     return getEmpleado(1).then(empleat => {
//       expect(empleat).toBe(empleat);
//     });
//   });

// //   test('Retorna salari que coincideixi amb objecte passat com argument', () => {
// //     return getSalario({ id: 1, name: 'Linux Torvalds' }).then(salari => {
// //       expect(salari).toBe(salari);
// //     });
// //   });

const obj = {id: 1, name: "Linux Torvalds"}
jest.mock("../app/employee.json", () => ({id: 1, name: "Linux Torvalds"}))

expect(obj).toHaveBeenCalledTimes(1)


// const getEmpleado = id => {
//   return new Promise((resolve, reject) => {

//       const fs = require('fs');
//       fs.readFile('../app/employee.json', (err, data) => {

//           if (err) throw err;

//           const employee = JSON.parse(data)
//           const empleat = employee.find(e => e.id === id);

//           if (empleat) {
//               resolve(empleat)
//           } else {
//               reject(`La id ${id} no existeix`)
//           }
//       });
//   })
// }

// getEmpleado(1)
// .then(mess => console.log(mess))


