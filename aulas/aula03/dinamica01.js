import { validate } from "bycontract";
import readline from "readline";

// Configuração do readline para entrada via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Vagao {
    #id;
    #capacidadeCarga;
    static #idGen = 0; // Contador para gerar IDs únicos

    constructor(capacidadeCarga) {
        validate(arguments, ["number"]);

        if (capacidadeCarga <= 0) {
            this.#id = -1; // Identificador inválido para vagões sem capacidade válida
        } else {
            Vagao.#idGen++;
            this.#id = Vagao.#idGen;
            this.#capacidadeCarga = capacidadeCarga;
        }
    }

    get id() {
        return this.#id;
    }

    get capacidadeCarga() {
        return this.#capacidadeCarga;
    }

    toString() {
        return `[Vagão: ${this.#id}, Capacidade de carga: ${this.#capacidadeCarga}kg]`;
    }
}

class GaragemVagoes {
    #vagoes;

    constructor() {
        this.#vagoes = [];
    }

    estaciona(vagao) {
        validate(vagao, Vagao);
        if (vagao.id === -1) {
            return false; // Não adiciona vagões inválidos
        }
        this.#vagoes.push(vagao);
        return true;
    }

    quantidade() {
        return this.#vagoes.length;
    }

    get vagoes() {
        return this.#vagoes.values();
    }

    retira(id) {
        validate(id, "number");
        for (let i = 0; i < this.quantidade(); i++) {
            if (this.#vagoes[i].id === id) {
                return this.#vagoes.splice(i, 1)[0]; // Remove e retorna o vagão
            }
        }
        return null; // Retorna null se o vagão não for encontrado
    }

    listarTodos() {
        if (this.quantidade() === 0) {
            console.log("A garagem está vazia.");
            return;
        }
        console.log("Lista de vagões na garagem:");
        for (let vagao of this.vagoes) {
            console.log(vagao.toString());
        }
    }

    listarPorCapacidade(capacidadeMinima) {
        validate(capacidadeMinima, "number");
        let filtrados = [...this.#vagoes].filter(vagao => vagao.capacidadeCarga >= capacidadeMinima);
        if (filtrados.length === 0) {
            console.log(`Nenhum vagão encontrado com capacidade maior ou igual a ${capacidadeMinima}kg.`);
            return;
        }
        console.log(`Vagões com capacidade maior ou igual a ${capacidadeMinima}kg:`);
        filtrados.forEach(vagao => console.log(vagao.toString()));
    }
}

// Criando a garagem
let garagem = new GaragemVagoes();

// Função para capturar entrada do usuário
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => resolve(resposta));
    });
}

// Menu interativo
async function menu() {
    let opcao;

    do {
        console.log("\nMenu:");
        console.log("<1> Listar todos os vagões da garagem");
        console.log("<2> Listar os vagões com capacidade maior ou igual à indicada");
        console.log("<3> Remover um vagão pelo identificador");
        console.log("<4> Estacionar um novo vagão");
        console.log("<5> Sair");

        opcao = parseInt(await perguntar("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                garagem.listarTodos();
                break;

            case 2:
                let capacidadeMinima = parseInt(await perguntar("Digite a capacidade mínima: "));
                garagem.listarPorCapacidade(capacidadeMinima);
                break;

            case 3:
                let idRemover = parseInt(await perguntar("Digite o ID do vagão a remover: "));
                let removido = garagem.retira(idRemover);
                console.log(removido ? `Vagão removido: ${removido.toString()}` : "Vagão não encontrado.");
                break;

            case 4:
                let capacidade = parseInt(await perguntar("Digite a capacidade do novo vagão: "));
                let novoVagao = new Vagao(capacidade);
                if (garagem.estaciona(novoVagao)) {
                    console.log("Vagão estacionado com sucesso.");
                } else {
                    console.log("Falha ao estacionar vagão. Verifique os dados.");
                }
                break;

            case 5:
                console.log("Saindo...");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 5);

    rl.close();
}

// Executa o menu
menu();