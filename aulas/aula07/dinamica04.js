// D1) Função curry(f)
// Essa função transforma uma função que recebe dois parâmetros em uma função curried:
// Exemplo: f(a, b) => curry(f)(a)(b)

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// Exemplo de uso:
function soma(a, b) {
  return a + b;
}

const somaCurried = curry(soma);
console.log("Resultado de somaCurried(3)(4):", somaCurried(3)(4)); // Deve imprimir: 7
