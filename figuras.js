const d = document;
// VARIABLES USADAS PARA EL CUADRADO
const $inputSquare = d.getElementById('sideSquare');
const $btnPerimeterSquare = d.getElementById('getPerimeterSquare');
const $btnAreaSquare = d.getElementById('getAreaSquare');
// VARIABLES USADAS PARA EL TRIÁNGULO
const $inputSide1Triangle = d.getElementById('sideTriangle1');
const $inputSide2Triangle = d.getElementById('sideTriangle2');
const $inputBaseTriangle = d.getElementById('baseTriangle');
const $inputHeightTriangle = d.getElementById('heightTriangle');
const $btnPerimeterTriangle = d.getElementById('getPerimeterTriangle');
const $btnAreaTriangle = d.getElementById('getAreaTriangle');
// VARIABLES USADAS PARA EL CIRCULO
const $inputRadiusCircle = d.getElementById('radiusCircle');
const $btnPerimeterCircle = d.getElementById('getPerimeterCircle');
const $btnAreaCircle = d.getElementById('getAreaCircle');

// CÓDIGO DEL CUADRADO
const perimeterSquare = (side) => side * 4;

const areaSquare = (side) => side * side;

$btnPerimeterSquare.addEventListener('click', () => {
    let perimeter = perimeterSquare($inputSquare.value);

    alert(`El perímetro del cuadrado es: ${perimeter}`)
});

$btnAreaSquare.addEventListener('click', () => {
    let area = areaSquare($inputSquare.value);

    alert(`El área del cudrado es: ${area}`)
});

// CÓDIGO DEL TRIÁNGULO
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;

const areaTriangle = (base, height) => (base * height) / 2;

$btnPerimeterTriangle.addEventListener('click', () => {
    let perimeter = perimeterTriangle(
        $inputSide1Triangle.value,
        $inputSide2Triangle.value,
        $inputBaseTriangle.value
    );

    alert(`El perímetro del triángulo es: ${perimeter}`)
});

$btnAreaTriangle.addEventListener('click', () => {
    let area = areaTriangle($inputBaseTriangle.value, $inputHeightTriangle.value);

    alert(`El área del triángulo es: ${area}`);
});

// CÓDIGO DEL CIRCULO
const PI = Math.PI;
const perimeterCircle = (radius) => PI * (radius * 2);

const areaCircle = (radius) => PI * (radius * radius);

$btnPerimeterCircle.addEventListener('click', () => {
    let perimeter = perimeterCircle($inputRadiusCircle.value);

    alert(`El perímetro del circulo es: ${perimeter}`);
});

$btnAreaCircle.addEventListener('click', () => {
    let area = areaCircle($inputRadiusCircle.value);

    alert(`El área del circulo es: ${area}`);
});