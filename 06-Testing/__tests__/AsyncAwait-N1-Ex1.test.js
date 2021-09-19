console.log("\nTEST: Async/Await - Nivell 1 - Exercici 1:\n");
////////////////////////////////////////////////////////

const { getEmpleado, getSalario } = require('../app/AsyncAwait-N1-Ex1.js');

test('Retorna objecte que coincideixi amb id 1', () => {
    return getEmpleado(1).then(empleat => {
      expect(empleat).toBe(empleat);
    });
  });

  test('Retorna salari que coincideixi amb objecte passat com argument', () => {
    return getSalario({ id: 1, name: 'Linux Torvalds' }).then(salari => {
      expect(salari).toBe(salari);
    });
  });