// CÓDIGO DEL CUADRADO
const sideSquare = 10;
console.group('Cuadrado');
console.log(`Los lados del cuadrado miden: ${sideSquare} cm`);

const perimeterSquare = sideSquare * 4;
console.log(`El perimetro del cuadrado es: ${perimeterSquare} cm^2`);

const areaSquare = sideSquare * sideSquare;
console.log(`El area del cuadrado es: ${areaSquare}`);
console.groupEnd();

// CÓDIGO DEL TRIÁNGULO
console.group('Triángulo');
const side1Triangle = 6;
const side2Triangle = 6;
const side3Triangle = 4;
console.log(`Los lados del triángulo miden: ${side1Triangle}cm, ${side2Triangle}cm, ${side3Triangle}cm.`);

const heightTriangle = 5.5;
console.log(`La altura del triángulo es de: ${heightTriangle}cm.`);

const perimeterTriangle = side1Triangle + side2Triangle + side3Triangle;
console.log(`El perimetro del triángulo es de: ${perimeterTriangle}cm.`)

const areaTriangle = (side3Triangle * heightTriangle) / 2;
console.log(`El area del triángulo es: ${areaTriangle}cm.`)
console.groupEnd();

// CÓDIGO DEL CIRCULO
console.group('Círculo');
// const PI = 3.1416;
const PI = Math.PI;
const radius = 6;
console.log(`El radio del círculo es de: ${radius}cm.`);

const perimeterCircle = PI * (radius * 2);
console.log(`El perimetro del círculo mide: ${perimeterCircle}cm.`);

const areaCircle = PI * (radius * radius);
console.log(`El area del círculo es de: ${areaCircle}cm`);

console.groupEnd();