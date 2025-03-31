const Moeda = require('./moeda');
const Cofrinho = require('./cofrinho');

const cofre = new Cofrinho();

cofre.adicionar(new Moeda(1, 'Real'));
cofre.adicionar(new Moeda(0.5, 'Real'));
cofre.adicionar(new Moeda(0.25, 'Real'));

console.log('Total no cofre:', cofre.calcularTotal());

console.log('Moedas no cofre:');
for (const moeda of cofre) {
    console.log(`- ${moeda.valor} ${moeda.nome}`);
}