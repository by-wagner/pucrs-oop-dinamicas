import { readFile } from 'fs/promises';

// D1) Dinâmica de cidades com boas condições climáticas
// Objetivo: Listar as 5 primeiras cidades (ordem crescente de custo de vida)
// que tenham boas condições climáticas: temperatura e umidade ideais

// Exemplo de estrutura esperada para as cidades:
/*
const cities = [
  {
    name: "Porto Alegre",
    country: "Brasil",
    region: "Sul",
    cost: 1200,
    currency: "BRL",
    temp: 295.15, // Kelvin
    humidity: 60,
    internetSpeed: 50
  },
  ...
];
*/

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function boasCondicoesClimaticas(cidade) {
  const tempC = kelvinToCelsius(cidade.temp);
  return tempC >= 18 && tempC <= 30 && cidade.humidity >= 50 && cidade.humidity <= 70;
}

function melhoresCidades(cidades) {
  return cidades
    .filter(boasCondicoesClimaticas)
    .sort((a, b) => a.cost - b.cost)
    .slice(0, 5)
    .map(cidade => ({
      nome: cidade.name,
      pais: cidade.country,
      custoDeVida: cidade.cost,
      temperatura: (kelvinToCelsius(cidade.temp)).toFixed(2),
      umidade: cidade.humidity
    }));
}

async function main() {
  const data = await readFile('./cidades_ficticias_100_unicas.json', 'utf-8');
  const cidades = JSON.parse(data);
  console.log("Top 5 cidades com boas condições climáticas:");
  console.log(melhoresCidades(cidades));
}

main();
