function setup() {
    createCanvas(800, 400);
    pixelDensity(1);
}


function draw() {
    loadPixels();

    for (let x = 0; x < width / 2; x++) {
        for (let y = 0; y < height; y++) {

            // changed a to be from -2.5 to 1.5 (look more centered)
            let a = map(x, 0, width / 2, -2.5, 1.5);
            let b = map(y, 0, height, -2, 2);
            let n = 0;
            let cx1 = a, cy1 = b;

            while (n < 100) {
                if (a * a + b * b > 4)     // abs() not needed
                    break;
                let twoAB = 2 * a * b;
                a = a * a - b * b + cx1;
                b = twoAB + cy1;
                n++;
            }

            let pix = (x + y * width) * 4;
            if (n > 20) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            } else {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = n * 10;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            }
        }
    }


    let cx2 = map(mouseX, 0, width / 2, -2.5, 1.5);
    let cy2 = map(mouseY, 0, height, -2, 2);

    // if cursor out of bound, use default
    if (cx2 < -2.5 || cx2 > 1.5 || cy2 < -2 || cy2 > 2) {
        cx2 = cy2 = 0;
    }


    for (let x = 0; x < width / 2; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width / 2, -2, 2);
            let b = map(y, 0, height, -2, 2);
            let n = 0;

            while (n < 100) {
                if (a * a + b * b > 4)    // abs() is not needed since both positive
                    break;
                let twoAb = 2 * a * b;
                a = a * a - b * b + cx2;
                b = twoAb + cy2;
                n++;
            }

            let pix = ((x + width / 2) + y * width) * 4;
            if (n > 20) {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = 0;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            } else {
                pixels[pix + 0] = 0;
                pixels[pix + 1] = n * 10;
                pixels[pix + 2] = 0;
                pixels[pix + 3] = 255;
            }
        }
    }
    updatePixels();
}