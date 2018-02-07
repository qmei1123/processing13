var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1200);
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
            xOne = random(60);
            xTwo = random(50, 110);
            
            yOne = random(50);
            yTwo = random(40, 100);

            ragged.show();
        //    ragged.move();
        }
    }
}

