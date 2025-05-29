let c;
let fondo;
let margen = 50;

function preload() {
  fondo = loadImage("data/img-fondo.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  image(fondo, 0, 0, width, height);

  c = new Caminante;
}

function draw() {
  c.dibujar();

  if(keyIsDown(69)){ // e
    c.mayorFrec(); //más agudo
  } else if(keyIsDown(81)){ // q
    c.menorFrec(); //más grave
  }
}

function keyPressed() {
  if (keyCode === 87) { // w
    c.mayorAmpl();
  } else if (keyCode === 83) { // s
    c.menorAmpl();
  } else if (keyCode === 65) { // a
    c.mayorDurac();
  } else if (keyCode === 68) { // d
    c.menorDurac();
  }
}

function mousePressed() {
  c.sinInterac();
}