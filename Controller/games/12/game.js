var questionObj;
var buttonObj = [];
var qAnswered;
var score;
var numQ;
var fin = false;

var questions = [];
var answers = [];
var backgrounds = [];
var textColor = [];
var buttonSprite = [];
var buttonTextColor = [];

var defaultBackground = "assets/kurtzgesagt-blueMarble.png"
var defaultTextColor = "black";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Factorisez complètement la somme suivante: - 2w + 12w";
answers[0] = [];
answers[0][0] = "2w (- 1 + 6)";
answers[0][1] = "- w (2 + 6)";
answers[0][2] = "2 (w + 12)";
answers[0][3] = "2 (- w + 6w)";

questions[1] = "Factorisez complètement la somme suivante: 13x - 3x";
answers[1] = [];
answers[1][0] = "x (13 - 3)";
answers[1][1] = "3x (10 - 1)";
answers[1][2] = "x (13 + 3)";
answers[1][3] = "13 (x - 3x)";

questions[2] = "Factorisez complètement la somme suivante: 34y + 17y";
answers[2] = [];
answers[2][0] = "17y (2 + 1)";
answers[2][1] = "y (34 + 17)";
answers[2][2] = "17 (2y + y)";
answers[2][3] = "1 (34y + 17y)";

questions[3] = "Factorisez complètement la somme suivante: 4z - 12z";
answers[3] = [];
answers[3][0] = "4z (1 - 3)";
answers[3][1] = "z (4 - 12)";
answers[3][2] = "4z (1 - 4)";
answers[3][3] = "4 (z - 3z)";

questions[4] = "Factorisez complètement la somme suivante: (2 + w) (w + 4) + (5w + 4) (2 + w)";
answers[4] = [];
answers[4][0] = "(2 + w) (6w + 8)";
answers[4][1] = "(w + 4) (6w + 6)";
answers[4][2] = "(5w + 4) (2w + 6)";
answers[4][3] = "(2 + w) (5w + 4w + 8)";

questions[5] = "Factorisez complètement la somme suivante: (1 - x) (10x + 11) - (2x + 11) (1 - x)";
answers[5] = [];
answers[5][0] = "(1 - x) (8x)";
answers[5][1] = "(10x + 11) (- 10 - 3x)";
answers[5][2] = "(1 - x) (8x + 22)";
answers[5][3] = "(2x + 11) (- 9x - 10)";

questions[6] = "Factorisez complètement la somme suivante: (3 + y) (6y + 4) - (7y - 4) (3 + y)";
answers[6] = [];
answers[6][0] = "(3 + y) (- x + 8)";
answers[6][1] = "(6y + 4) (- 6y + 7)";
answers[6][2] = "(6 + 2y) (13y + 8)";
answers[6][3] = "(3 + y) (13y)";

questions[7] = "Factorisez complètement la somme suivante: z (34z - 120) + (62z - 90) z";
answers[7] = [];
answers[7][0] = "z (96z - 210)";
answers[7][1] = "z (28z - 30)";
answers[7][2] = "z (96z + 210)";
answers[7][3] = "(28z - 30)";

questions[8] = "Factorisez complètement la somme suivante: 18w^2 - 30w + 6";
answers[8] = [];
answers[8][0] = "6 (3w^2 - 5w + 1)";
answers[8][1] = "18 (w^2 - 48w - 12)";
answers[8][2] = "18 (w^2 - 12w + 24)";
answers[8][3] = "6 (w^2 + 5w + 1)";

questions[9] = "Factorisez complètement la somme suivante: 3x^2 + 6x - 12";
answers[9] = [];
answers[9][0] = "3 (x^2 + 2x - 4)";
answers[9][1] = "3 (x^2 + 3x + 9)";
answers[9][2] = "3 (x^2 + 2x - 3)";
answers[9][3] = "3 (x^2- 2x + 4)";

questions[10] = "Factorisez complètement la somme suivante: 4y^2 - 20y + 4";
answers[10] = [];
answers[10][0] = "4 (y^2 - 5y + 1)";
answers[10][1] = "2 (2y^2 + 10y + 2)";
answers[10][2] = "4 (y^2 - 5y - 1)";
answers[10][3] = "4 (y^2 - 16y)";

questions[11] = "Factorisez complètement la somme suivante: 12z^2 + 4z - 32";
answers[11] = [];
answers[11][0] = "4 (3z^2 + z - 8)";
answers[11][1] = "12 (z^2 + 3z - 20)";
answers[11][2] = "12 (z^2 - 8z - 20)";
answers[11][3] = "4 (3z^2 - z - 8)";

questions[12] = "Factorisez complètement la somme suivante: - 24x - 8x";
answers[12] = [];
answers[12][0] = "- 8x (3 + 1)";
answers[12][1] = "- 8 (- 3x - x)";
answers[12][2] = "- 8x (- 3 - 1)";
answers[12][3] = "- 2 (12x + 4x)";

questions[13] = "Factorisez complètement la somme suivante: (10y + 4) (- 15 - y) + (10y - 4) (- 15 - y)";
answers[13] = [];
answers[13][0] = "(- 15 - y) (20y)";
answers[13][1] = "(10y - 4) (- 30 - 2y)";
answers[13][2] = "(- 15 - y) (100y^2 - 16)";
answers[13][3] = "(10y + 4) (9y - 19) (- 15 - y)";

questions[14] = "Factorisez complètement la somme suivante: 27z^2 - 45z + 81";
answers[14] = [];
answers[14][0] = "9 (3z^2 - 5z + 9)";
answers[14][1] = "3 (9z^2 - 15z + 27)";
answers[14][2] = "5 (27z^2 - 9z + 81)";
answers[14][3] = "9 (3z^2 - 45z + 9)";

for (i = 0; i < questions.length; i++) {
  if (backgrounds[i] == undefined) {
    backgrounds[i] = defaultBackground;
  }
  if (textColor[i] == undefined) {
    textColor[i] = defaultTextColor;
  }
  if (buttonSprite[i] == undefined) {
    buttonSprite[i] = defaultButtonSprite;
  }
  if (buttonTextColor[i] == undefined) {
    buttonTextColor[i] = defaultButtonTextColor;
  }
}

function QuestionObj(content) {
  this.obj = new GameObject();
  this.obj.text = content;
  this.obj.x = 0;
  this.obj.y = 0.5;
  this.obj.width = 1;
  this.obj.height = 1 / 8;
}

function ButtonObj(content, id, correct) {
  this.obj = new GameObject();
  this.obj.text = content;
  this.obj.width = 3 / 9;
  this.obj.height = 1 / 8;
  this.obj.image = game.createImage(buttonSprite[numQ]);
  this.correct = correct;
  this.id = id;
  if (Math.floor(id / 2) == 0) {
    this.obj.y = 6 / 8;
  } else {
    this.obj.y = 7 / 8;
  }
  if (id % 2 == 0) {
    this.obj.x = 1 / 9;
  } else {
    this.obj.x = 5 / 9;
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

function initQuestion(num) {
  questionObj = new QuestionObj(questions[num]);
  game.setBackground(backgrounds[num]);

  var offset = Math.floor(Math.random() * 4);
  for (i = 0; i < 4; i++) {
    buttonObj[i] = new ButtonObj(answers[num][(i + offset) % 4], i, (i + offset) % 4 == 0);
  }
}

function shuffle() {
  for (i = 0; i < questions.length; i++) {
    var index = Math.floor(Math.random() * questions.length);
    [questions[i], questions[index]] = [questions[index], questions[i]];
    [answers[i], answers[index]] = [answers[index], answers[i]];
    [backgrounds[i], backgrounds[index]] = [backgrounds[index], backgrounds[i]];
    [textColor[i], textColor[index]] = [textColor[index], textColor[i]];
    [buttonSprite[i], buttonSprite[index]] = [buttonSprite[index], buttonSprite[i]];
    [buttonTextColor[i], buttonTextColor[index]] = [buttonTextColor[index], buttonTextColor[i]];
  }
}

function endScreen() {
  game.clearAll();

  var message = new GameObject();
  message.x = 1 / 3;
  message.y = 1 / 4;
  message.width = 1 / 3;
  message.height = 1 / 4;
  message.text = "Résultat";
  game.draw(message);

  score.obj.x = 1 / 3;
  score.obj.y = 2 / 4;
  score.obj.width = 1 / 3;
  score.obj.height = 1 / 4;

  game.draw(score.obj);
}

function drawAll() {
  game.fill(textColor[numQ]);
  game.draw(score.obj);
  game.draw(questionObj.obj);
  game.fill(buttonTextColor[numQ]);
  for (i = 0; i < 4; i++) {
    game.draw(buttonObj[i].obj);
  }
  game.fill("black");
}


function setup() {
  shuffle();
  score = new Score();

  numQ = 0;
  initQuestion(numQ);
  qAnswerd = false;
}

function update() {
  if (qAnswered) {
    game.clearAll();
    if (numQ == questions.length - 1) {
      console.log("the end");
      game.clearAll();
      fin = true;
      game.end(score.obj.text);
    } else {
      numQ++;
      initQuestion(numQ);
      qAnswered = false;
    }
  }
  if (!fin) {
    drawAll();
  } else {
    endScreen();
  }
}

function clicked(x, y) {
  for (i = 0; i < 4; i++) {
    if (buttonObj[i].obj.contains(x, y)) {
      qAnswered = true;
      if (buttonObj[i].correct) {
        score.increment();
      } else {
        score.decrement();
      }
    }
  }
}
