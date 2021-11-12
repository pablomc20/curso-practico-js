class Triangle {
    constructor(sideA, sideB, base) {
        this.sideA = parseInt(sideA);
        this.sideB = parseInt(sideB);
        this.base = parseInt(base);
        this.height;
        this.typeTriangle;
        
        this.setTypeTriangle();
    }

    setTypeTriangle() {
        if (this.sideA === this.sideB &&
            this.sideB === this.base) {
            this.typeTriangle = "Equilátero";
        }else if (this.sideA === this.sideB ||
            this.sideA === this.base ||
            this.base === this.sideB) {
            this.typeTriangle = "Isóceles";
        }else {
            this.typeTriangle = "Escaleno";
        }
    }

    getTypeTriangle() {
        return `Es un triángulo ${this.typeTriangle.toUpperCase()}`;
    }    

    getHeight() {
        if (this.typeTriangle === 'Escaleno'){
            let semiperimeter;
            semiperimeter = (this.sideA + this.sideB + this.base) / 2;
            
            /** Heron´s formula*/
            this.height = 
                (2 / this.base)  *
                (Math.sqrt(
                    semiperimeter *
                    (semiperimeter - this.sideA) *
                    (semiperimeter - this.sideB) *
                    (semiperimeter - this.base)
                )
            )
        } else {
            // Pythagoras theorem
            // a**2 + b**2 = c**2       ===        a = r[c**2 - (b**2 / 4)]
            // height        **2  + base           = side
            // major leg  **2  + minor leg   = hypotenuse
            return Math.sqrt((Math.pow(this.sideA, 2) - (Math.pow(this.base, 2) / 4)));
        }

        return this.height
    }

    getArea() { 
        return (this.base * this.getHeight()) / 2;
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.base;
    }
}