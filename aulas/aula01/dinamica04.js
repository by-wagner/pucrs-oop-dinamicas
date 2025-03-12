import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let valorIngresso = 500.0;
let categoria = prompt('Qual a categoria do comprador?').trim();

let valorCobrado = valorIngresso;

switch (categoria) {
    case 'Criança':
        valorCobrado = 0;
        break;

    case 'Convidado':
        valorCobrado *= 0.75;
        break;

    case 'Funcionario Idoso':
        valorCobrado *= 0.5; // 50% para funcionário
        valorCobrado *= 0.5; // 50% sobre o novo valor (totalizando 75%)
        break;

    case 'Idoso':
    case 'Funcionario':
        valorCobrado *= 0.5;
        break;

    case 'Geral':
        break;

    default:
        valorCobrado = NaN;
}

if (!isNaN(valorCobrado)) {
    console.log(`Valor a ser pago: R$${valorCobrado.toFixed(2)}`);
} else {
    console.log("Categoria inválida! Por favor, insira uma categoria válida.");
}