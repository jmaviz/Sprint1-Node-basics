
const { Persona } = require("../app/ClassArrow-N-II-Ex2.js")


jest.mock("../app/ClassArrow-N-II-Ex2.js"); 

it('Persona crida el constructor de la classe', () => {

  const bass = new Persona("S.Harris")
  const singer = new Persona("B.Dickinson")
  const guitar1 = new Persona("A.Smith")
  const guitar2 = new Persona("D.Murray")
  
  expect(Persona).toHaveBeenCalledTimes(4);

})

it('Instància de persona crida mètode', () => {
 
  const drummer = new Persona("C.Burr")
  drummer.getNom()
  drummer.getNom()

  const instancia = drummer.getNom

  expect(instancia).toHaveBeenCalledTimes(2)
})

