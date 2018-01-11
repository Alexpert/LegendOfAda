var mekasSecondaireObj = [];
var mekaYakObj;
var buttonsObj = [];
var score;
var fin = false;
var primeNumbers = [2, 3, 5, 7, 11];

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
  this.obj.width = 0.25 * this.size/4;
  this.obj.height = 0.5 * this.size/4;
  this.obj.x = 0.5 - this.obj.width/2;
  this.obj.y = 0.5 - this.obj.height/2;

  this.divide = function(divider) {
    var secondMekYak = new MekaYak(divider, 1);
    secondMekYak.obj.y = 0.7;
    mekasSecondaireObj.push(secondMekYak);
    this.obj.text = this.obj.text / divider;
    this.size--;

    this.obj.width = 0.4 * (4 + mekaYakObj.size)/8;
    this.obj.height = 0.5* (4 + mekaYakObj.size)/8;
    this.obj.x = 0.5 - this.obj.width/2;
    this.obj.y = 0.5 - this.obj.height/2;
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
  var number = 1;
  for (i = 0; i < 4; i++) {
    number = number * primeNumbers[Math.floor(Math.random() * primeNumbers.length)];
  }
  return number;
}

function drawAll() {
  game.setFontSize(0.04);
  game.fill("red");
  for (i = 0; i < mekasSecondaireObj.length; i++) {
    mekasSecondaireObj[i].obj.x = (i + 1) / (mekasSecondaireObj.length + 1) - mekasSecondaireObj[i].obj.width/2;
    game.draw(mekasSecondaireObj[i].obj);
  }

  game.setFontSize(0.15 * (4 + mekaYakObj.size)/8);
  game.draw(mekaYakObj.obj);
  game.fill("black");

  game.setFontSize(0.1);
  game.draw(score.obj);

  game.setFontSize(0.07);
  for (i = 0; i < buttonsObj.length; i++) {
    game.draw(buttonsObj[i].obj);
  }
}

function endScreen() {
  game.clearAll();


  game.setFontSize(0.2);
  game.fill("black");

  var message = new GameObject();
  message.x = 1 / 4;
  message.y = 1 / 5;
  message.width = 1 / 2;
  message.height = 1 / 4;
  message.text = "Résultat";
  game.draw(message);

  score.obj.x = 1 / 3;
  score.obj.y = 2 / 5;
  score.obj.width = 1 / 3;
  score.obj.height = 1 / 4;
  game.draw(score.obj);

  game.setFontSize(0.04);
  game.fill("red");
  for (i = 0; i < mekasSecondaireObj.length; i++) {
    mekasSecondaireObj[i].obj.x = (i + 1) / (mekasSecondaireObj.length + 1) - mekasSecondaireObj[i].obj.width/2;
    game.draw(mekasSecondaireObj[i].obj);
  }
  game.end(score.obj.text);
}

function setup() {
  game.setBackground("./assets/backgroundParis.jpg");
  mekaYakObj = new MekaYak(initValue(), 4);
  score = new Score();

  buttonsObj.push(new Button(0.01,  2));
  buttonsObj.push(new Button(0.21,  3));
  buttonsObj.push(new Button(0.41,  5));
  buttonsObj.push(new Button(0.61,  7));
  buttonsObj.push(new Button(0.81, 11));
}

function update() {
  if (!fin) {
    game.clearAll();
    drawAll();
  } else {
    endScreen();
    game.end(score.obj.text);
  }
}

function clicked(x, y) {
  if (!fin) {
    console.log(mekaYakObj);
    console.log(mekasSecondaireObj);
    for (i = 0; i < buttonsObj.length; i++) {
      if (buttonsObj[i].obj.contains(x, y)) {
        if (mekaYakObj.obj.text % buttonsObj[i].obj.text == 0) {
          mekaYakObj.divide(buttonsObj[i].obj.text);
          score.increment();
          fin = mekaYakObj.obj.text == 1;
        } else {
          score.decrement();
        }
      }
    }
  }
}
