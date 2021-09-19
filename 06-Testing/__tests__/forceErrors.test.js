
const { getEmpleado, getSalario, getInfoUsuari } = require('../app/N3-Ex1');


const id = 10;
const empleat = { id: 4, name: "Juan MV" }


it('Id 10 no existeix', async () => {
    try {
        await getEmpleado(id);
    } catch (error) {
        expect(error).toEqual((`La id ${id} no existeix`));
    }
});

it('Id 4 usuari no te associat cap sou', async () => {
    try {
        await getSalario(empleat);
    } catch (error) {
        expect(error).toEqual((`L'empleat amb id ${empleat.id} no té cap salari associat`));
    }
});

it('Funcio asyncrona registra errors', async () => {
    try {
        await getInfoUsuari(id);
    } catch (error) {
        expect(error).toEqual((`La id ${id} no existeix`));
    }
});




