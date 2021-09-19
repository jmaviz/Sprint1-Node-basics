console.log("\nPromises & Callbacks - Nivell 2 - Exercici 3:\n");
console.log("TEST: Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.");

/////////////////////////////////////////////////////////////////


const { getEmployees, getSalario } = require('../app/PromCall-N2-Exercici3.js');

test('Retorna objecte que coincideixi amb id 1', () => {
    return getEmployees(1).then(employee => {
      expect(employee).toBe(employee);
    });
  });

  test('Retorna salari que coincideixi amb objecte passat com argument', () => {
    return getSalario({ id: 1, name: 'Linux Torvalds' }).then(salari => {
      expect(salari).toBe(salari);
    });
  });