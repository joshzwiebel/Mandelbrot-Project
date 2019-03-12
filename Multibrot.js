function setup() {
    createCanvas(800, 400);
    pixelDensity(1);
}

// change back to display
function draw() {
    loadPixels();

    let expbutton = document.getElementById("userInput");
    let exponent = expbutton.value;

    for (let x = 0; x < width / 2; x++) {
        for (let y = 0; y < height; y++) {

            let current_real = map(x, 0, width / 2, -2, 2);
            let current_imag = map(y, 0, height, -2, 2);
            let num = new Complex(current_real, current_imag);
            let starting_imag = current_imag;
            let starting_real = current_real;
            let n = 0;

            while (n < 20) {
                num.exp(exponent);
                // num.display_complex();
                num.real += starting_real;
                num.imaginary += starting_imag;
                if (num.abs() > 4)
                    break;
                n++;
            }

            let pix = (x + y * width) * 4;
            if (n > 10) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            } else {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = n * 20;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            }
        }
    }


    for (let x = 0; x < width / 2; x++) {
        for (let y = 0; y < height; y++) {
            let current_real = map(x, 0, width / 2, -2, 2);
            let current_imag = map(y, 0, height, -2, 2);
            let num = new Complex(current_real, current_imag);
            let n = 0;

            let cx = map(mouseX, 0, width / 2, -2, 2);
            let cy = map(mouseY, 0, height, -2, 2);
            if (cx > 2 || cx < -2 ||cy > 2 || cy < -2 ){
                cx = cy = 0;
            }

            while (n < 20) {
                if (num.abs() > 4)
                    break;
                num.exp(exponent);
                // num.display_complex();
                num.real += cx;
                num.imaginary += cy;
                n++;
            }

            let pix = ((x + width / 2) + y * width) * 4;
            if (n > 10) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            } else {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = n * 20;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            }
        }
    }
    updatePixels();
}
