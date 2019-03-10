
var minSlider;
var maxSlider;

var expbutton = document.getElementById("expform");
exponent = expbutton.value();
function setup() {
    createCanvas(360, 360);
    pixelDensity(1);
    minSlider = createSlider(-2.5, 0, -2.5, 0.5);
    maxSlider = createSlider(0, 2.5, 2.5, 0.5);




}

function draw() {
    loadPixels();

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var current_real = map(x, 0, width, minSlider.value(), maxSlider.value());
            var current_imag = map(y, 0, height, minSlider.value(), maxSlider.value());
            var num = new Complex(current_real, current_imag);

            /*var a = map(x, 0, width, -2.5, 2.5);
            var b = map(y, 0, height, -2.5, 2.5);*/
            var n = 0;
            var starting_real = current_real;
            var starting_imag = current_imag;


            while (n < 10) {

                num.exp(exponent);

                //num.display_complex();
                num.real += starting_real;

                num.imaginary += starting_imag;


                if (num.abs() > 16) {
                    break;
                }
                n++;


            }
            var bright = map(n, 0, 50, 0, 1);
            bright = map(Math.sqrt(bright), 0, 1, 0, 255);
            if (n === 10) {
                bright = 0;
            }



            var pix = (x + y * width) * 4;
            pixels[pix] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;


        }
    }


    updatePixels();

}
