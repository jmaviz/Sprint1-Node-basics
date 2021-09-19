const { Gos } = require("../app/ClassArrow-N-III")

jest.mock("../app/ClassArrow-N-III.js"); 

it('Gos crida constructor', () => {

  const gos = new Gos("color","penso")
  expect(Gos).toHaveBeenCalledTimes(1);
})

it('Instància de Gos crida mèdote', () => {
 
  const gos = new Gos("color","penso")
  gos.comunicar()
  const instancia = gos.comunicar

  expect(instancia).toHaveBeenCalledTimes(1)
})

it('Mètode estàtic de Gos ok', () => {
 
  Gos.caminar()
  const estatic = Gos.caminar

  expect(estatic).toHaveBeenCalledTimes(1)
})