import promptsync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptsync({ sigint: true });

const valorSuco = 5.2;
const valorSanduiche = 12;
const descontoPercentual = 0.2;
const quantidadeDesconto = 10;

console.log(chalk.blue("\n===== Lanchonete PUCRS =====\n"));

let qtdSuco = Number(prompt(chalk.green("Quantos copos de suco você quer? ")));
let qtdSanduiches = Number(prompt(chalk.green("Quantos sanduíches você quer? ")));

let valorSemDescontoSuco = valorSuco * qtdSuco;
let valorSemDescontoSanduiche = valorSanduiche * qtdSanduiches;

let descontoSuco = qtdSuco > quantidadeDesconto ? valorSemDescontoSuco * descontoPercentual : 0;
let descontoSanduiche = qtdSanduiches > quantidadeDesconto ? valorSemDescontoSanduiche * descontoPercentual : 0;

let despesaComSuco = valorSemDescontoSuco - descontoSuco;
let despesaComSanduiche = valorSemDescontoSanduiche - descontoSanduiche;
let custoTotal = despesaComSuco + despesaComSanduiche;

let qtdClientes = Number(prompt(chalk.green("Quantos clientes irão dividir a conta? ")));
let valorPorCliente = custoTotal / qtdClientes;

console.log(chalk.yellow("\n======== Recibo ========\n"));
console.log(`🥤 ${chalk.cyan("Suco:")} R$ ${valorSuco.toFixed(2)}, ${chalk.magenta("Quantidade:")} ${qtdSuco}, ${chalk.red("Valor sem desconto:")} R$ ${valorSemDescontoSuco.toFixed(2)}, ${chalk.green("Valor do desconto:")} R$ ${descontoSuco.toFixed(2)}, ${chalk.blue("Total:")} R$ ${despesaComSuco.toFixed(2)}`);
console.log(`🥪 ${chalk.cyan("Sanduíche:")} R$ ${valorSanduiche.toFixed(2)}, ${chalk.magenta("Quantidade:")} ${qtdSanduiches}, ${chalk.red("Valor sem desconto:")} R$ ${valorSemDescontoSanduiche.toFixed(2)}, ${chalk.green("Valor do desconto:")} R$ ${descontoSanduiche.toFixed(2)}, ${chalk.blue("Total:")} R$ ${despesaComSanduiche.toFixed(2)}`);
console.log(chalk.yellow("\n-----------------------------"));
console.log(`🛒 ${chalk.bold("Custo total a pagar:")} ${chalk.red(`R$ ${custoTotal.toFixed(2)}`)}`);
console.log(`👥 ${chalk.bold("Quantidade de clientes:")} ${qtdClientes}`);
console.log(`💳 ${chalk.bold("Valor por cliente:")} ${chalk.green(`R$ ${valorPorCliente.toFixed(2)}`)}`);
console.log(chalk.yellow("-----------------------------\n"));
console.log(chalk.blue("Obrigado pela sua compra! 😊"));