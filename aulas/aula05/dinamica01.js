class Stack {
    #base;

    constructor() {
        this.#base = [];
    }

    push(value) {
        this.#base.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.#base.pop();
    }

    isEmpty() {
        return this.size === 0;
    }

    get size() {
        return this.#base.length;
    }

    get top() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.#base[this.size - 1];
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
while(!stack.isEmpty()) {
    console.log(stack.pop());
}