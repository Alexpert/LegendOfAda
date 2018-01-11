var mekaFract;
var nbMeka = 4;
var buttonsObj = [];
var score;
var fin = false;

var primeNumbers = [2, 3, 5, 7, 11];
var coupleIrred = [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 5], [3, 5], [3, 4],
                   [3, 5], [5, 6], [5, 7], [4, 9], [5, 9], [8, 11], [13, 14], [15, 17]];

function Button(x, n) {
  this.obj = new GameObject();
  this.obj.x = x;
  this.obj.y = 0.85;
  this.obj.width = 0.18;
  this.obj.height = 0.12;
  this.obj.text = n;
  this.obj.image = game.createImage("./assets/button.png");
}

function MekaFract(coupleValeur) {
  this.divisionLeft = 4;
  this.mekaUp = new GameObject();
  this.mekaDown = new GameObject();
  this.barreMid = new GameObject();

  this.mekaUp.width = 1 / 6;
  this.mekaUp.height = 1 / 3;
  this.mekaUp.x = 0.5 - this.mekaUp.width / 2;
  this.mekaUp.y = 0.5 - this.mekaUp.height;
  this.mekaUp.text = coupleValeur[0];
  this.mekaUp.image = game.createImage("assets/mekayak-français.png");

  this.mekaDown.width = 1 / 6;
  this.mekaDown.height = 1 / 3;
  this.mekaDown.x = 0.5 - this.mekaDown.width / 2;
  this.mekaDown.y = 0.5;
  this.mekaDown.text = coupleValeur[1];
  this.mekaDown.image = game.createImage("assets/mekayak-français.png");

  this.barreMid.width = 1.2 / 6;
  this.barreMid.height = 0.01;
  this.barreMid.x = 0.5 - this.barreMid.width / 2;
  this.barreMid.y = 0.5 - this.barreMid.height / 2;
  this.barreMid.image = new game.createImage("assets/barreFract.png");

  this.reduce = function(entier) {
    if (this.mekaUp.text % entier == 0 && this.mekaDown.text % entier == 0) {
      this.mekaUp.text = this.mekaUp.text / entier;
      this.mekaDown.text = this.mekaDown.text / entier;
      this.divisionLeft--;
      return true;
    } else {
      return false;
    }
  }

  this.reductible = function() {
    return this.divisionLeft != 0;
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

function coupleEntiers() {
  couple = coupleIrred[Math.floor(Math.random() * coupleIrred.length)];
  console.log(couple);
  for (i = 0;  i < 4; i++) {
    var randPrime = primeNumbers[Math.floor(Math.random() * primeNumbers.length)];
    couple[0] = couple[0] * randPrime;
    couple[1] = couple[1] * randPrime;
    console.log(randPrime);
    console.log(couple);
  }
  return couple;
}

function drawAll() {
  game.draw(score.obj);

  game.setFontSize(0.1);
  game.fill("red");
  game.draw(mekaFract.mekaUp);
  game.draw(mekaFract.mekaDown);


  game.setFontSize(0.07);
  game.fill("black");
  game.draw(mekaFract.barreMid);

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
}

function setup() {
  game.setBackground("./assets/backgroundParis.png");
  mekaFract = new MekaFract(coupleEntiers());
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
  for (i = 0; i < buttonsObj.length; i++) {
    if (buttonsObj[i].obj.contains(x, y)) {
      if (mekaFract.reduce(buttonsObj[i].obj.text)) {
        score.increment();
        if (!mekaFract.reductible()) {
          nbMeka--;
          if (nbMeka == 0) {
            fin = true;
          } else {
            mekaFract = new MekaFract(coupleEntiers());
          }
        }
      } else {
        score.decrement();
      }
    }
  }
}
