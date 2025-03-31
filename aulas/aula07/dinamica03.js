// D1) Fibonacci com memoização
// Implementa a versão recursiva da sequência de Fibonacci com otimização via memoização

function memoize(fn) {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) {
      return cache.get(n);
    }
    const resultado = fn(n);
    cache.set(n, resultado);
    return resultado;
  };
}

let fib = function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

fib = memoize(fib);

// Exemplo de uso
const n = 40;
console.time(`fib(${n})`);
const resultado = fib(n);
console.timeEnd(`fib(${n})`);
console.log(`Fibonacci(${n}) =`, resultado);
