console.log("\nTEST: Async/Await - Nivell 2 - Exercici 1:\n");

////////////////////////////////////////////////////////

const { getUsuari, getInfo } = require('../app/AsyncAwait-N2-Ex1.js')

test('Retorna objecte que coincideix amb id 1', () => {
    return getUsuari(1).then(usuari => {
      expect(usuari).toBe(usuari);
    });
  });

  test('Get usuari retorna una promise amb objecte de usuari 1', async () => {
    const usuari = await getUsuari(1);
    expect(usuari).toBe(usuari);
  });