// console.log("\nTEST: Async/Await - Nivell 2 - Exercici 1:\n");

////////////////////////////////////////////////////////
const { getUsuari, getInfo } = require('../app/AsyncAwaitJFK.js');



test('Funcio getUsuari', async () => {
  
  jest.useFakeTimers();
  getUsuari();
  jest.advanceTimersByTime(3000); //3 Segons de prova

  await getUsuari();

});

test('Funcio GetInfo', async () => {

  jest.useFakeTimers();
  getInfo();
  jest.advanceTimersByTime(3000); //3 segons de prova

  await getInfo();
});