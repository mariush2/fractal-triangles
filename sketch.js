var tri_width = 200 * 2
var tri_height = -176 * 2

function setup() {
  createCanvas(windowWidth / 1.2, windowHeight / 1.2);
}

function draw() {
  background(51);
  translate(width / 2 - tri_width / 2, height / 1.3);
  fract_rect(0, 0, tri_width / 2, tri_height, tri_width, 0, 0);
}

function fract_rect(x1, y1, x2, y2, x3, y3, n) {
  stroke(255);
  noFill();
  triangle(x1, y1, x2, y2, x3, y3);
  x2 /= 2;
  y2 /= 2;
  x3 /= 2;
  push();
  translate(x2, y2)
  triangle(x1, y1, x2, -y2, x3, y3);
  pop();
  if (n >= 0) {
    n--;
    //Left
    fract_rect(x1, y1, x2, y2, x3, y3, n);

    //Right
    pop();
    push();
    translate(x2 * 2, 0);
    fract_rect(x1, y1, x2, y2, x3, y3, n);
    pop();

    //Top
    push();
    translate(x2, y2);
    fract_rect(x1, y1, x2, y2, x3, y3, n);
    pop();

  }
}
