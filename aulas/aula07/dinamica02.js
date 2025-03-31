// D2) Dado um array, retornar um novo array sem valores repetidos utilizando o método filter()

function removerDuplicatasComFilter(array) {
  return array.filter((valor, indice, self) => self.indexOf(valor) === indice);
}

// Exemplo de uso:
const comRepetidos = [1, 2, 2, 3, 1, 4, 3, 5];
const semRepetidos = removerDuplicatasComFilter(comRepetidos);
console.log("Array sem valores repetidos:", semRepetidos); // [1, 2, 3, 4, 5]
