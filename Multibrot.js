var minvalx =-2.5;
var maxvalx= 2.5;

var initX = 0;
var inity = 0;
var finx=360;
var finy = 360;

function setup() {
    createCanvas(360, 360);
    pixelDensity(1);



}
//todo add window scaling function on mouse click and release. have it update as the user grags. use the map function to get correct bounds, work on it



function mousePressed(){
    initX=mouseX;
    inity = mouseY;
}

function mouseReleased() {
    finx = mouseX;
    finy = mouseY;
    stroke(0);
    strokeWeight(5);
    noFill();

    rect(initX,inity,finx-initX,finy-inity);
}


function draw() {
    loadPixels();
    minvalx = map(mouseX, 0, width, -2, 2);
    maxvalx =map(mouseY, 0, width, -2, 2);




    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            let current_real = map(x, 0, width, minvalx, maxvalx);
            let current_imag = map(y, 0, height, minvalx, maxvalx);

            var num = new Complex(current_real, current_imag);
            /*var a = map(x, 0, width, -2.5, 2.5);
            var b = map(y, 0, height, -2.5, 2.5);*/
            let iterations = 0;

            let start = new Complex(current_real, current_imag);
            var expbutton = document.getElementById("userInput");
            var exponent = expbutton.value;
            let max_iterations = 10;
            let final_num = new Complex(0, 0);

            while (iterations < max_iterations) {
                num.exp(exponent);

                num.add(start);
                if (num.abs() > 4) { //todo check what this boundary should be
                    final_num = num;
                    break;

                }
                iterations++;
                final_num = num;

            }

            let logzn = Math.log(final_num.abs()) / exponent; //this will cause issues for exponents of 1/0/negative
            let nu = Math.log(logzn / Math.log(exponent)) / Math.log(exponent);
            let rgb = [0, 0, 0];
            let bright = iterations + 1 - nu;
            //let bright = map(iterations, 0, max_iterations, 0, 1);
            /*bright = map(Math.sqrt(bright), 0, 1, 0, 255);*/
            //bright = map(bright, 0, 1, 0, 255);
            if (iterations === max_iterations) {
                rgb=[0,0,0];
            }
            else{
                rgb = hsvtorgb(bright,1,1)
            }

            var pix = (x + y * width) * 4;
            pixels[pix] = rgb[0];
            pixels[pix + 1] = rgb[1];
            pixels[pix + 2] = rgb[2];
            pixels[pix + 3] = iterations * 255 * 100 / max_iterations; //this line can be changed to simply 255 for ful brightness
        }
    }
    updatePixels();
    //noLoop();
}
