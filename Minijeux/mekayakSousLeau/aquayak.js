var assetPath = "assets/";

var boatSprite;
var aquaYakSprite;

var boat;
var currentYak;

var levWater = 0.2;

function preload() {
  boatSprite = loadImage(assetPath + "boat.png");
  aquaYakSprite = loadImage(assetPath + "aquayak.png");
}

function Boat(x) {
  this.x = x;

  this.draw = function() {
    image(boatSprite, x, levWater * windowHeight);
  }

}

function AquaYak(x, y) {
  this.x = x;
  this.y = y;
  this.alive = true;
  this.distance = Math.sqrt(x*x + y*y);

  this.draw = function() {
    image(aquaYakSprite, this.x / 12 * windowsWidth, this.y / 7 * windowHeight);
  }
}

function button(i, val) {
  this.i = i;
  this.val = val;
}

function setup() {
  createCanvas(windowsWidth, windowHeight);
  boat = new boat(1/12 * windowWidth)
  currentYak = new AquaYak(Math.floor(Math.random() * 10), Math.floor(Math.random * 7));
}

function draw() {
  if (!currentYak.alive) {
    currentYak = new AuquaYak(Math.floor(Math.random() * 10), Math.floor(Math.random * 7));
  }
  
  

}