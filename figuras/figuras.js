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
const $btnPDataTriangle = d.getElementById('getDataTriangle');
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

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

console.log(alturaTrianguloIsosceles(8, 8, 6));

// CÓDIGO DEL TRIÁNGULO
const side1 = $inputSide1Triangle,
    side2 = $inputSide2Triangle,
    base = $inputBaseTriangle;
    
$btnPDataTriangle.addEventListener('click', () => {
    let triangle = new Triangle(side1.value, side2.value, base.value),
        area = triangle.getArea();
        height = triangle.getHeight();
        perimeter = triangle.getPerimeter();
        typeTriangle = triangle.getTypeTriangle();

    alert(`
        ${typeTriangle}
        El área del triángulo es: ${area}
        El perímetro del triángulo es: ${perimeter}
        La altura del triángulo es: ${height}
    `);
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