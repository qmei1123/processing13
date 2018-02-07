var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1000);
    background(0);
    ragged = new Ragged();
    frameRate(.75);
}
        
class Ragged {
    constructor() {
    
    }
//    move() {
//        xOne = xOne + random(-5, 5);
//        xTwo = xTwo + random(-5, 5);
//    }
    show() {
        noFill();
        stroke(random(255));
        strokeWeight(random(2));
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xTwo + i, yTwo + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 100) {
        for (y = 0; y < height; y += 100) {
            xOne = 100 * sin(60) + 180;
            xTwo = random(60)*cos(60) + 180;
            
            yOne = 50 * cos(60) + 180;
            yTwo = random(40, 140)*sin(60) + 180;

            ragged.show();
        //    ragged.move();
        }
    }
}


