class Deque {
    #base;

    constructor() {
        this.#base = [];
    }

    enqueue(value) {
        this.#base.push(value);
    }

    enqueueFront(value) {
        this.#base.unshift(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.#base.shift();
    }

    dequeueBack() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.#base.pop();
    }

    isEmpty() {
        return this.#base.length === 0;
    }

    get size() {
        return this.#base.length;
    }

    get first() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.#base[0];
    }

    get last() {
        if (this.isEmpty()) {
            throw new Error('Deque is empty');
        }
        return this.#base[this.#base.length - 1];
    }
}

// Cria uma instância da Deque
let deque = new Deque();

console.log("Deque inicial:", deque.isEmpty()); // true

// Adiciona elementos no final
deque.enqueue(10);
deque.enqueue(20);
deque.enqueue(30);
console.log("Após enfileirar 10, 20 e 30:", deque.size); // 3

// Adiciona elementos no início
deque.enqueueFront(5);
deque.enqueueFront(1);
console.log("Após enfileirar 5 e 1 na frente:", deque.size); // 5

// Acessa primeiro e último elementos
console.log("Primeiro elemento:", deque.first); // 1
console.log("Último elemento:", deque.last); // 30

// Remove do início e do final
console.log("Removido do início:", deque.dequeue()); // 1
console.log("Removido do final:", deque.dequeueBack()); // 30

// Estado final da Deque
console.log("Primeiro elemento agora:", deque.first); // 5
console.log("Último elemento agora:", deque.last); // 20
console.log("Deque está vazio?", deque.isEmpty()); // false
console.log("Tamanho da Deque:", deque.size); // 3