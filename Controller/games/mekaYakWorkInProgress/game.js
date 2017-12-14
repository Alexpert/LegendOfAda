var mekasSecondaireObj = [];
var mekaYakObj;
var buttonsObj = [];
var scoreObj;
var fin = false;

function Button(x, n) {
  this.obj = new GameObject();
  this.obj.x = x;
  this.obj.y = 0.85;
  this.obj.width = 0.18;
  this.obj.height = 0.12;
  this.obj.text = n;
  this.obj.image = game.createImage("./assets/button.png");
}

function MekaYak(valeur, size) {
  this.obj = new GameObject();
  this.size = size;

  this.obj.text = valeur;
  this.obj.image = game.createImage("./assets/mekayak-français.png");
  this.obj.width = 0.4 * this.size/4;
  this.obj.height = 0.5 * this.size/4;
  this.obj.x = 0.5 - this.obj.width/2;
  this.obj.y = 0.5 - this.obj.height/2;

  this.divide = function(divider) {
    mekasSecondaireObj.push[new MekaYak(divider, 1)];
    this.obj.text = this.obj.text / divider;
    this.size--;

    this.width = 0.4 * this.size/4;
    this.height = 0.5 * this.size/4;
  }
}

function Score() {
  this.obj = new GameObject();
  this.obj.x = 3 / 8;
  this.obj.y = 1/12;
  this.obj.width = 2 / 8;
  this.obj.height = 1 / 11;
  this.obj.text = 0;

  this.increment = function() {
    this.obj.text += 5;
  }

  this.decrement = function() {
    this.obj.text -= 5;
  }
}

function initValue() {
  return 25;
}

function drawAll() {
  for (i = 0; i < mekasSecondaireObj.length; i++) {
    game.draw(mekasSecondaireObj[i].obj);
  }

  game.setFontSize(0.07);
  for (i = 0; i < buttonsObj.length; i++) {
    game.draw(buttonsObj[i].obj);
  }

  game.setFontSize(0.15);
  game.fill("red");
  game.draw(mekaYakObj.obj);
  game.fill("black");
  game.setFontSize(0.1);
  game.draw(scoreObj.obj);
}

function setup() {
  game.setBackground("./assets/backgroundParis.jpg");
  mekaYakObj = new MekaYak(initValue(), 4);
  scoreObj = new Score();

  buttonsObj.push(new Button(0.01  ,  2));
  buttonsObj.push(new Button(0.21,  3));
  buttonsObj.push(new Button(0.41,  5));
  buttonsObj.push(new Button(0.61,  7));
  buttonsObj.push(new Button(0.81, 11));
}

function update() {
  if (!fin) {
    console.log("running");
    game.clearAll();
    drawAll();
  } else {
    endScreen();
  }
}

function clicked(x, y) {
  console.log("clicked");
  console.log(x, y);
  for (i = 0; i < buttonsObj.length; i++) {
    console.log(i);
    console.log(buttonsObj[i]);
    if (buttonsObj[i].obj.contains(x, y)) {
      console.log("on button");
      if (mekaYakObj.obj.text % buttonsObj[i].obj.text == 0) {
        mekaYakObj.divide(buttonsObj[i].obj.text);
        scoreObj.increment();
      } else {
        scoreObj.decrement();
      }
    }
  }
}
