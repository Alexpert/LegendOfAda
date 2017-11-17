var eratoasterSprite;
var toastSprite;

var eratoaster;
var toasts = [];

var gravity = 0.2;
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var probaToast = 0.02;
var gain = 5;
var loose = 2;

function preload() {
  createCanvas(windowWidth, windowHeight);
  eratoasterSprite = loadImage("testMiniJeu/assets/eratoaster.png");
  toastSprite = loadImage("testMiniJeu/assets/toast.png");
}

function Eratoaster() {
  this.x = windowWidth/2;
  this.velocity = 5;

  this.draw = function() {
    image(eratoasterSprite, this.x, windowHeight - 0.8 * eratoasterSprite.height);
  }

  this.move = function() {
    if (this.x < 0 || this.x > windowWidth - eratoasterSprite.width) {
      this.velocity = -this.velocity;
    }
    this.x += this.velocity;
  }
}

function Toast(x) {
  this.x = x;
  this.y = windowHeight - eratoasterSprite.height;
  this.velocity = -10;
  this.value = Math.floor(Math.random() * 100);

  this.draw = function() {
    image(toastSprite, this.x, this.y);
    textSize(50);
    text (this.value, this.x, this.y + toastSprite.height * 0.7);
  }

  this.move = function() {
    this.y += this.velocity;
    this.velocity += gravity;
  }

  this.isHit = function(x, y) {
    return (x > this.x && x < this.x + toastSprite.width && y > this.y && y < this.y + toastSprite.height);
  }

  this.isPrime = function() {
    prime = false;
    for (i = 0; i < primeNumbers.length; i++) {
      if (this.value == primeNumbers[i]) {
        prime = true;
      }
    }
    return prime;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  eratoaster = new Eratoaster();
  loop();
}

function draw() {
  for (i = 0; i < toasts.length; i++) {
    if (toasts[i].y > windowHeight) {
      toasts.splice(i, 1);
    }
  }
  clear();
  background(42);
  for (i = 0; i < toasts.length; i++) {
    toasts[i].move();
  }
  eratoaster.move();

  if (Math.random() < probaToast) {
    toasts.push(new Toast(eratoaster.x));
  }


  for (i = 0; i < toasts.length; i++) {
    toasts[i].draw();
  }
  eratoaster.draw();
}

function testForToast() {

}

function mouseClicked() {
  console.log("mouse Clicked");
  for (i = 0; i < toasts.length; i++) {
    console.log("toast no " + i);
    console.log(toasts.length);
    if (toasts[i].isHit(mouseX, mouseY)) {
      console.log("toast hit");
      if (toasts[i].isPrime()) {
        console.log("toast prime");
        score += gain;
      } else {
        console.log("toast not prime");
        score -= loose;
      }
    }
  }
  console.log(score);

}
