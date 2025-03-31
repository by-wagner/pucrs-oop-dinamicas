async function somarUm(x) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (typeof x !== "number") {
    throw new Error("Argumento deve ser valor numérico");
  }
  return x + 1;
}

async function somarDois(x) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (typeof x !== "number") {
    throw new Error("Argumento deve ser valor numérico");
  }
  return x + 2;
}

function composicaoSeq(...funcoes) {
  return async function (valor) {
    let resultado = valor;
    for (const fn of funcoes) {
      resultado = await fn(resultado);
    }
    return resultado;
  };
}

// Exemplo de uso
async function executar() {
  try {
    const somaSeq = composicaoSeq(somarUm, somarDois);
    const resultado = await somaSeq(5);
    console.log("Resultado final:", resultado);
  } catch (e) {
    console.error("Erro:", e.message);
  }
}

executar();
