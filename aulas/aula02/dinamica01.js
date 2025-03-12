class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 20);

console.log(`Rectangle - Width: ${rectangle.width}, Height: ${rectangle.height}, Area: ${rectangle.area}, Perimeter: ${rectangle.perimeter}`);