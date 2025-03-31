// Funções assíncronas fornecidas
function somarUm(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof x !== "number") {
        reject(new Error("Argumento deve ser valor numérico"));
      }
      resolve(x + 1);
    }, 1000);
  });
}

function somarDois(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof x !== "number") {
        reject(new Error("Argumento deve ser valor numérico"));
      }
      resolve(x + 2);
    }, 2000);
  });
}

// Exemplo de uso com async/await
async function executarSomadores(valorInicial) {
  try {
    const resultado1 = await somarUm(valorInicial);
    console.log(`Resultado após somar 1: ${resultado1}`);

    const resultado2 = await somarDois(resultado1);
    console.log(`Resultado após somar 2: ${resultado2}`);
  } catch (erro) {
    console.error("Erro:", erro.message);
  }
}

executarSomadores(5);
