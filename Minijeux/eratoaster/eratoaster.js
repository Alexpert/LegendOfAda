var eratoasterSprite;
var toastSprite;
var backSprite;

var eratoaster;
var toasts = [];
var score = 0;
var startTime;

var gravity;
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var probaToast = 0.02;
var gain = 5;
var loose = 2;
var gameLength = 60000;

function preload() {
  eratoasterSprite = loadImage("assets/eratoaster.png");
  toastSprite = loadImage("assets/toast.png");
  backSprite = loadImage("assets/background.png");
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
  this.velocity = -Math.floor(Math.random() * windowsHeight);
  this.value = Math.floor(Math.random() * 100);
  this.hit = false;

  this.draw = function() {
    image(toastSprite, this.x, this.y);
    if (this.hit) {
      if (this.prime) {
        stroke('green');
        fill('green');
      } else {
        stroke('red');
        fill('red');
      }
    } else {
      stroke('white');
      fill('white');
    }
    textSize(50);
    text (this.value, this.x, this.y + toastSprite.height * 0.7);
  }

  this.move = function() {
    this.y += this.velocity;
    this.velocity += gravity;
  }

  this.isHit = function(x, y) {
    if (this.hit) {
      return false;
    } else {
      if (x > this.x && x < this.x + toastSprite.width && y > this.y && y < this.y + toastSprite.height) {
        this.hit = true;
        return true;
      }
    }
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
  this.prime = this.isPrime();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = 0.001 * windowHeight;
  eratoaster = new Eratoaster();
  startTime = new Date().getTime();
  //backSprite = backSprite.resize(windowWidth, windowHeight);
  loop();
}

function endScreen() {
  clear();
  background(42);
  stroke('white');
  fill('white');
  text("Le Temps est écoulé",windowWidth / 2 - 250, 0.2 * windowHeight);
  text("Votre score est de:",windowWidth / 2 - 250, 0.4 * windowHeight);
  text(score, windowWidth / 2 - 250, 0.6 * windowHeight);
  text("Get Gud Fagget",windowWidth / 2 - 250, 0.8 * windowHeight);
  noLoop();
}

function draw() {

  for (i = 0; i < toasts.length; i++) {
    if (toasts[i].y > windowHeight) {
      toasts.splice(i, 1);
    }
  }


  clear();
  image(backSprite, 0, 0);


  stroke('white');
  fill('white');
  textSize(69);
  text(score, 10, 79)
  var timeLeft = Math.floor((gameLength - (new Date().getTime() - startTime)) / 1000);
  if (timeLeft < 11) {
    stroke('red');
    fill('red');
  }
  text(timeLeft, windowWidth / 2 - 69, 79);


  for (i = 0; i < toasts.length; i++) {
    toasts[i].move();
  }
  eratoaster.move();

  if (toasts.length == 0) {
    toasts.push(new Toast(eratoaster.x));
  }


  for (i = 0; i < toasts.length; i++) {
    toasts[i].draw();
  }
  eratoaster.draw();

  if (new Date().getTime() >= startTime + gameLength) {
      endScreen();
  }
}

function mouseClicked() {
  for (i = 0; i < toasts.length; i++) {
    if (toasts[i].isHit(mouseX, mouseY)) {
      if (toasts[i].prime) {
        score += gain;
      } else {
        score -= loose;
      }
    }
  }
}
