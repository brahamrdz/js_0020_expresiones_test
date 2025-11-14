// mathExpressions.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
}

function modulus(a, b) {
    if (b === 0) throw new Error("Modulus by zero is not allowed");
    return a % b;
}

function exponent(a, b) {
    return Math.pow(a, b);
}

function squareRoot(a) {
    if (a < 0) throw new Error("Square root of negative number is not allowed");
    return Math.sqrt(a);
}

function cube(a) {
    return a * a * a;
}

function absolute(a) {
    return Math.abs(a);
}

function sine(degrees) {
    const radians = degrees * (Math.PI / 180);
    return Math.sin(radians);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponent,
  squareRoot,
  cube,
  absolute,
  sine
};
