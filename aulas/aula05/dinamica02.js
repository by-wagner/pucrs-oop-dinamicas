class Queue {
    #base;

    constructor() {
        this.#base = [];
    }

    enqueue(value) {
        this.#base.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.#base.splice(0, 1)[0];
    }

    isEmpty() {
        return this.size === 0;
    }

    get size() {
        return this.#base.length;
    }

    get first() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.#base[0];
    }

    get last() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.#base[this.#base.length -1];
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Primeiro elemento:", queue.first); // Imprime  10
console.log("Tamanho da fila:", queue.size); // Imprime 3
console.log("Tamanho após dequeue:", queue.size); // Imprime  2

