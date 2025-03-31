// Dinâmica Aula 9
// Crie um módulo em um arquivo chamado “pilhaarray.js” para conter a implementação da classe PilhaArray;
// Projete um conjunto de casos de teste para a realização do processo de teste unitário de cada método da classe;
// Crie um arquivo “pilhaarray.test.js” que contenha a implementação do teste unitário utilizando o framework Jest;
// Realize a correção de qualquer defeito encontrado e execute novamente os testes.

const { PilhaArray } = require('./pilhaarray');

describe('PilhaArray', () => {
    let pilha;

    beforeEach(() => {
        pilha = new PilhaArray();
    });

    test('inicia vazia', () => {
        expect(pilha.vazia).toBe(true);
        expect(pilha.tamanho).toBe(0);
    });

    test('empilhar adiciona elementos', () => {
        pilha.empilhar('A');
        expect(pilha.vazia).toBe(false);
        expect(pilha.tamanho).toBe(1);
        expect(pilha.topo).toBe('A');
    });

    test('empilhar múltiplos elementos e verificar topo', () => {
        pilha.empilhar('A');
        pilha.empilhar('B');
        expect(pilha.topo).toBe('B');
        expect(pilha.tamanho).toBe(2);
    });

    test('desempilhar remove e retorna o elemento do topo', () => {
        pilha.empilhar('X');
        pilha.empilhar('Y');
        const removido = pilha.desempilhar();
        expect(removido).toBe('Y');
        expect(pilha.topo).toBe('X');
        expect(pilha.tamanho).toBe(1);
    });

    test('desempilhar de pilha vazia retorna null', () => {
        expect(pilha.desempilhar()).toBeNull();
    });

    test('acessar topo de pilha vazia retorna null', () => {
        expect(pilha.topo).toBeNull();
    });
});