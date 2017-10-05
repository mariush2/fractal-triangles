var tri_width = 100
var tri_height = -88

function setup() {
  createCanvas(windowWidth / 1.2, windowHeight / 1.2);
}

function draw() {
  background(51);
  translate((width / 2) - tri_width * 1.5, (height / 2) - (tri_height / 4));
  for (var i = 0; i < 3; i++) {
    fract_rect(0, 0, tri_width / 2, tri_height, tri_width, 0);
    translate(tri_width, 0);
  }
}

function fract_rect(x1, y1, x2, y2, x3, y3) {
  stroke(255);
  noFill();
  //triangle(x1, y1, x2, y2, x3, y3);
  y1 /= 2;
  y2 /= 2;
  y3 /= 2;
  x1 /= 2;
  x2 /= 2;
  x3 /= 2;
  //Draw two bot triangles
  for (var i = 0; i < 2; i++) {
    triangle(x1 + i * tri_width / 2, y1, x2 + i * tri_width / 2, y2, x3 + i * tri_width / 2, y3);
  }
  // draw top inside triangle
  triangle(x1 + tri_width / 4, y1 + tri_height / 2, x2 + tri_width / 4, y2 * 2, x3 + tri_width / 4, y3 + tri_height / 2);
}
