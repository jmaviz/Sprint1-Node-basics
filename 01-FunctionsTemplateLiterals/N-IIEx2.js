
const nom = `El meu nom i cognom es ${ImprimirNom(`Juan`, `Martinez Vizcaino`)}`;

function ImprimirNom(nom, cognoms) {
    return `${nom} ${cognoms}`
}

console.log(nom);
