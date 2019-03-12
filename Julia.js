let angle = 0;

function setup() {
    createCanvas(360,360);
    pixelDensity(1);
}

function draw() {

    loadPixels();
    let cx = map(mouseX, 0, width, -1, 1);
    let cy = map(mouseY, 0, height, -1, 1);

    angle += 0.00001;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, -2.5, 2.5);
            let b = map(y, 0, height, -2.5, 2.5);
            /*var a = map(x, 0, width, -2.5, 2.5);
            var b = map(y, 0, height, -2.5, 2.5);*/
            var n = 0;

            while (n < 50) {
                if (a * a + b * b > 4.0) {   // abs() is not needed since both positive
                    break;
                }
                let twoAb = 2 * a * b;
                a = a * a - b * b + cx;
                b = twoAb + cy;
                n++;
                angle += 0.1;
            }
            var bright = map(n, 0, 50, 0, 1);
            bright = map(sqrt(bright), 0, 1, 0, 255);
            if (n === 50) {
                bright = 0;
            }

            var pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;

        }
    }
    updatePixels();
}