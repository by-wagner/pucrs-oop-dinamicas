// D2) Programa de console que consulta CEPs com fetch() e trata exceções
import readline from 'readline';
import fetch from 'node-fetch'; // instale com: npm install node-fetch

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function consultarCEP(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.erro) {
      console.log("CEP não encontrado.");
    } else {
      console.log("Resultado da consulta:");
      console.log(data);
    }
  } catch (error) {
    console.error("Erro na consulta:", error.message);
  }
}

function perguntarCEP() {
  rl.question('Digite um CEP (ou 0 para sair): ', async (input) => {
    if (input === '0') {
      console.log('Encerrando...');
      rl.close();
      return;
    }

    await consultarCEP(input);
    perguntarCEP(); // continua perguntando
  });
}

perguntarCEP();
