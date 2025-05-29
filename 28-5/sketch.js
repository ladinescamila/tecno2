let c;
let fondo;
let margen = 50;

function preload() {
  fondo = loadImage("data/img-fondo.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  image(fondo, 0, 0, windowWidth, windowHeight);

  c = new Caminante;
}

function draw() {
  c.dibujar();

}

function keyPressed() {
  if (keyCode === 87) { // w
    c.mayorAmpl();
  } else if (keyCode === 83) { // s
    c.menorAmpl();
  } else if (keyCode === 65) { // a
    c.mayorFrec();
  } else if (keyCode === 68) { // d
    c.menorFrec();
  }
}

function mousePressed() {
  c.sinInterac();
}