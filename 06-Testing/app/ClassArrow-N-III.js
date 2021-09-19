

const Animal = class {

    static caminar() {
        if (this === Animal) {
            throw new TypeError("Can not call static abstract method foo.");
        } else if (this.caminar === Animal.caminar) {
            throw new TypeError("Please implement static abstract method foo.");
        } else {
            throw new TypeError("Do not call static abstract method foo from child.");
        }
    }

    constructor(color) {
        if (this.constructor === Animal) {
            throw new TypeError("Can not construct abstract class.");
        }
        if (this.comunicar === Animal.prototype.comunicar) {
            throw new TypeError("Please implement abstract method foo.");
        }
        this.color = color
    }

    comunicar() {
        throw new TypeError("Do not call abstract method foo from child.");
    }
}


const Gat = class extends Animal {

    static caminar() {
        console.log('El gat es mou');
    }

    constructor(color, raza) {
        super(color);
        this.raza = raza
    }

    comunicar() {
        console.log('miau');
    }
}


const Gos = class extends Animal {

    static caminar() {
        console.log('El gos corre');
    }

    constructor(color, alimentacio) {
        super(color);
        this.alimentacio = alimentacio
    }

    comunicar() {
        console.log('guau');
    }
}

// Gos.caminar()
// Gat.caminar()

// const gat = new Gat("gris","siames")
// const gos = new Gos("negre", "penso")

// gat.comunicar()
// gos.comunicar()


module.exports = {
    Animal,
    Gat,
    Gos
}