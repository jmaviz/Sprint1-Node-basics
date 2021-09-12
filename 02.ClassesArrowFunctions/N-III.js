function Coche (marca, color, puertas) {
    this.marca = marca;
    this.color = color;
    this. puertas = puertas;
}

const coche1 = new Coche("renault", "blau", 4);
const coche2 = new Coche("opel", "vermell", 4);
const coche3 = new Coche("mazda", "negre", 4);

console.log(coche1);
console.log(coche2);
console.log(coche3);