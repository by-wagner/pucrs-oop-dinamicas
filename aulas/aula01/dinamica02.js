import promptsync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;

console.log(chalk.blue("\n===== Lanchonete PUCRS =====\n"));

let qtdSuco = Number(prompt(chalk.green("Quantos copos de suco você quer? ")));
let qtdSanduiches = Number(prompt(chalk.green("Quantos sanduíches você quer? ")));

let despesaComSuco = valorSuco * qtdSuco;
let despesaComSanduiche = valorSanduiche * qtdSanduiches;
let custoTotal = despesaComSuco + despesaComSanduiche;

let qtdClientes = Number(prompt(chalk.green("Quantos clientes irão dividir a conta? ")));
let valorPorCliente = custoTotal / qtdClientes;

console.log(chalk.yellow("\n======== Recibo ========\n"));
console.log(`🥤 ${chalk.cyan("Suco:")} R$ ${valorSuco.toFixed(2)}, ${chalk.magenta("Quantidade:")} ${qtdSuco}, ${chalk.green("Total:")} R$ ${despesaComSuco.toFixed(2)}`);
console.log(`🥪 ${chalk.cyan("Sanduíche:")} R$ ${valorSanduiche.toFixed(2)}, ${chalk.magenta("Quantidade:")} ${qtdSanduiches}, ${chalk.green("Total:")} R$ ${despesaComSanduiche.toFixed(2)}`);
console.log(chalk.yellow("\n-----------------------------"));
console.log(`🛒 ${chalk.bold("Custo total a pagar:")} ${chalk.red(`R$ ${custoTotal.toFixed(2)}`)}`);
console.log(`👥 ${chalk.bold("Quantidade de clientes:")} ${qtdClientes}`);
console.log(`💳 ${chalk.bold("Valor por cliente:")} ${chalk.green(`R$ ${valorPorCliente.toFixed(2)}`)}`);
console.log(chalk.yellow("-----------------------------\n"));
console.log(chalk.blue("Obrigado pela sua compra! 😊"));
