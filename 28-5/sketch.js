// variables de sonido
let mic; // micrófono
let amp; // amplitud del sonido
let frec; // frecuencia del sonido

// variables de calibracion
ampMin = 0.07; // valor mínimo de amplitud
ampMax = 0.3; // valor máximo de amplitud

// variables del programa
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

  mic = new p5.AudioIn();
  mic.start();

  c = new Caminante;
}

function draw() {
  background(0);

  c.dibujar();

  if(keyIsDown(69)){ // e
    c.mayorFrec(); //más agudo
  } else if(keyIsDown(81)){ // q
    c.menorFrec(); //más grave
  }

  amp = mic.getLevel();
  //calibrar();
  console.log("Calibración completada: " + ampMin + " - " + ampMax);
  push();
  textSize(50);
  fill(255);
  text("AMPLITUD: " + nfc(amp, 4), margen, margen);
  pop();
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

function calibrar() { // calibrar el micrófono
  console.log("Calibración completada: " + ampMin + " - " + ampMax);
  push();
  textSize(50);
  fill(255);
  text("AMPLITUD: " + nfc(amp, 4), margen, margen);
  pop();
}
