var eratoaster;
var toast;
var posE;
var delta = 3;
var toasts = [];

function preload() {
  eratoaster = loadImage("testMiniJeu/assets/eratoaster.png");
  toast = loadImage("testMiniJeu/assets/toast.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  posE = windowWidth/2;
  frameRate(60);
  console.log("setUp");
  noLoop();
  toasts.push(new Toast(200));
}

function Toast(posX) {
  this.posX = posX;
  this.posY = 200;
  this.afficher = function() {
    image(toast, this.posX, this.posY);
  }
}

function draw() {
  if (posE < 0 || posE > (windowWidth-eratoaster.width)) {
    delta = -delta;
  }
  posE += delta;
  clear();
  background(42);
  posE += delta;
  image(eratoaster, posE, windowHeight - 0.8 * eratoaster.height);
  if (Math.random() < 0.05) {
    toasts.push(new Toast(posE));
    console.log(toasts);
    console.log("toast!");
  }
  toasts[0].afficher();
}
