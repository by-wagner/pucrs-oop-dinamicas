import { validate } from "bycontract";

function gerarNumeroAleatorio(min, max) {
    validate(arguments, ["Number", "Number"]);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dobrarNegativos(lista) {
    validate(arguments, ["Array"]);
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            lista[i] *= -2;
        }
    }
    return lista;
}

function buscarExtremo(lista, buscarMaior) {
    validate(arguments, ["Array", "Boolean"]);
    let extremo = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if ((buscarMaior && lista[i] > extremo) || (!buscarMaior && lista[i] < extremo)) {
            extremo = lista[i];
        }
    }

    return extremo;
}

function formatarListaComoString(dados) {
    validate(arguments, ["Array"]);
    let resultado = "";

    for (let i = 0; i < dados.length; i++) {
        resultado += `[${dados[i]}] `;
    }
    return resultado.trim();
}

let numeros = new Array(100);
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = gerarNumeroAleatorio(-100, 100);
}

console.log("Lista original:");
console.log(formatarListaComoString(numeros));

console.log("\nLista com negativos dobrados:");
console.log(formatarListaComoString(dobrarNegativos([...numeros])));

console.log("\nMaior valor da lista:");
console.log(buscarExtremo(numeros, true));

console.log("\nMenor valor da lista:");
console.log(buscarExtremo(numeros, false));