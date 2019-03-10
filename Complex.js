

class Complex {
    constructor(real_, imaginary_) {
        this.real = real_ || 0;
        this.imaginary = imaginary_ || 0;
    }


    add(num) {
        this.real += num.real;
        this.imaginary += num.imaginary;
        return this;
    }

    subtract(num) {
        this.real -= num.real;
        this.imaginary -= num.imaginary;
        return this;
    }

    mult(num) {
        this.real = this.real*num.real - this.imaginary*num.imaginary;
        this.imaginary = this.real*num.imaginary+this.imaginary*this.real;
        return this;
    }


    display_complex() {
        if (this.imaginary === '0') return '' + this.real;
        if (this.imaginary === 0) return '' + this.imaginary + 'i';
        if (this.imaginary < 0) return '' + this.real + this.imaginary + 'i';
        return '' + this.real + '+' + this.imaginary + 'i';
    }

    exp(num){
        var mag = Math.sqrt(this.real**2+this.imaginary**2);
        var theta = Math.atan2(this.imaginary,this.real);
        this.real = (mag**num)*Math.cos(theta*num);
        this.imaginary = (mag**num)*Math.sin(theta*num);
    }
};
var a = new Complex(4, 2);
a.exp(3.5);
console.log(a.display_complex());


