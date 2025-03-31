// index.js

import { Moeda, Cofrinho } from './entidades.js';
import { salvarCofrinho, lerCofrinho } from './persistencia.js';

const cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, 'Real'));
cofre.adicionar(new Moeda(0.5, 'Real'));
cofre.adicionar(new Moeda(0.25, 'Real'));

await salvarCofrinho(cofre, 'meu_cofre.json');
console.log('Cofrinho salvo!');

const cofreLido = await lerCofrinho('meu_cofre.json');
console.log('Total no cofre lido:', cofreLido.calcularTotal());