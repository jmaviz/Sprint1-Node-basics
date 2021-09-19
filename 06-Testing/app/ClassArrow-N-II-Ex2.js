class Persona {

    constructor(nom) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    decirNombre() {
        return this.getNom()
    }
}

// const usuari = new Persona("Bruce");
// console.log(usuari.decirNombre());


module.exports = {
    Persona
}