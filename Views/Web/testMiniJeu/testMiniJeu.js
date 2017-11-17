var eratoaster;
var toast;
var posE;
var delta = 3;
var toasts = [];
var gravity = 1;

function preload() {
  eratoaster = loadImage("testMiniJeu/assets/eratoaster.png");
  toast = loadImage("testMiniJeu/assets/toast.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  posE = windowWidth/2;
  frameRate(60);
  console.log("setUp");
  loop();
}

function Toast(posX) {
  this.posX = posX;
  this.posY = windowHeight - eratoaster.height/2;
  this.speed = -30;
  this.number = Math.floor(Math.random() * 100);
  this.afficher = function() {
    image(toast, this.posX, this.posY);
  }
  this.physics = function() {
    this.speed += gravity;
    this.posY += this.speed;
  }
}

function draw() {
  console.log(toasts);
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
  }
  for (i = 0; i < toasts.length; i++) {
    toasts[i].physics();
    toasts[i].afficher();
    if (toasts[i].posY > windowHeight) {
      toasts.splice(i, 1);
    }
  }
}
