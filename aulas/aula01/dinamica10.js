function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dobrarNegativos(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            lista[i] *= -2;
        }
    }
    return lista;
}

function encontrarMenorValor(lista) {
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

function formatarListaComoString(lista) {
    let resultado = "";

    for (let elemento of lista) {
        resultado += `[${elemento}]`;
    }
    return resultado;
}

let numeros = new Array(100);

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = gerarNumeroAleatorio(-100, 100);
}

console.log("Lista original:");
console.log(formatarListaComoString(numeros));

console.log("\nLista com negativos dobrados:");
console.log(formatarListaComoString(dobrarNegativos(numeros)));

console.log("\nMenor valor da lista:");
console.log(encontrarMenorValor(numeros));


