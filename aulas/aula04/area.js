import {typedef, validate } from "bycontract"

const PI = Math.PI;

export function squareArea(side){
    validate(side, "number");
    return side * side;
}

export function retangleArea(side1, side2){
    validate(arguments, ["number", "number"]);
    return side1 * side2;
}

export function triangleArea(base, height){
    validate(arguments, ["number", "number"]);
    return (base * height)/2;
}

export function circleArea(radius){
    validate(radius, "number");
    return PI * radius;
}