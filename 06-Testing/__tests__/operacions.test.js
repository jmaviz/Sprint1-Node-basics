const { suma, resta, multiplicacio, divisio } = require('../app/operacions');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('restar 2 - 1 es igual a 1', () => {
  expect(resta(2, 1)).toBe(1);
});

test('multiplicar 2 * 5 es igual a 10', () => {
  expect(multiplicacio(2, 5)).toBe(10);
});

test('dividir 10 / 2 es igual a 5', () => {
  expect(divisio(10, 2)).toBe(5);
});