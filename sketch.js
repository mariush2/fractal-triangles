let tri_width = 200 * 2
let tri_height = -176 * 2
let n_start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight / 1.1);
  createP("Width:");
  width_slider = createSlider(0, 780, 400, 1);
  createP("Height:")
  height_slider = createSlider(0, 398, 300, 1);
  createP("n:")
  n_input = createInput(4, "4");
}

function draw() {
  colorMode(HSB);
  background(0, 0, 20);
  tri_width = width_slider.value();
  tri_height = -height_slider.value();
  n_start = n_input.value();
  translate(width / 2 - tri_width / 2, height / 5 - tri_height);
  triangle(0, 0, tri_width / 2, tri_height, tri_width, 0);
  fract_rect(0, 0, tri_width / 2, tri_height, tri_width, 0, n_start);

}

function fract_rect(x1, y1, x2, y2, x3, y3, n) {
  stroke(255);
  noFill();
  x2 /= 2;
  y2 /= 2;
  x3 /= 2;
  if (n > 0) {
    n--;
    //Left
    fract_rect(x1, y1, x2, y2, x3, y3, n);

    //Right
    push();
    translate(x2 * 2, 0);
    fract_rect(x1, y1, x2, y2, x3, y3, n);
    pop();

    //Middle
    push();
    translate(x2, y2)
    triangle(x1, y1, x2, -y2, x3, y3);
    pop();

    //Top
    push();
    translate(x2, y2);
    fract_rect(x1, y1, x2, y2, x3, y3, n);
    pop();

  }
}
