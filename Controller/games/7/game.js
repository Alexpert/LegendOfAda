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

var defaultBackground = "assets/Paysage_de_mongolie.jpg"
var defaultTextColor = "white";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Quel est le résultat de l'opération suivante: 18/3 + 7/4";
answers[0] = [];
answers[0][0] = "73/12";
answers[0][1] = "31/12";
answers[0][2] = "73/4";
answers[0][3] = "- 73/12";

questions[1] = "Quel est le résultat de l'opération suivante: 14/5 - 8/3";
answers[1] = [];
answers[1][0] = "2/15";
answers[1][1] = "82/15";
answers[1][2] = "-2/15";
answers[1][3] = "2/5";

questions[2] = "Quel est le résultat de l'opération suivante: 3/4 + 6/7";
answers[2] = [];
answers[2][0] = "43/28";
answers[2][1] = "9/11";
answers[2][2] = "9/28";
answers[2][3] = "43/11";

questions[3] = "Quel est le résultat de l'opération suivante: 24/6 - 9/3";
answers[3] = [];
answers[3][0] = "1";
answers[3][1] = "15/3";
answers[3][2] = "15/6";
answers[3][3] = "54/6";

questions[4] = "Quel est le résultat de l'opération suivante: - 13/6 - 23/5";
answers[4] = [];
answers[4][0] = "- 203/30";
answers[4][1] = "203/30";
answers[4][2] = " -230/15";
answers[4][3] = "- 196/30";

questions[5] = "Quel est le résultat de l'opération suivante: 33/3 + 47/2";
answers[5] = [];
answers[5][0] = "207/6";
answers[5][1] = "- 207/6";
answers[5][2] = "207/3";
answers[5][3] = "141/6";

questions[6] = "Quel est le résultat de l'opération suivante: 3/7 + 9/2";
answers[6] = [];
answers[6][0] = "69/14";
answers[6][1] = "12/9";
answers[6][2] = "12/14";
answers[6][3] = "16/5";

questions[7] = "Quel est le résultat de l'opération suivante: 15/4 + 6/7";
answers[7] = [];
answers[7][0] = "128/28";
answers[7][1] = "21/11";
answers[7][2] = "90/28";
answers[7][3] = "45/14";

questions[8] = "Quel est le résultat de l'opération suivante: - 7/3 + 4/5";
answers[8] = [];
answers[8][0] = "- 24/15";
answers[8][1] = "- 3/8";
answers[8][2] = "- 28/15";
answers[8][3] = "47/15";

questions[9] = "Quel est le résultat de l'opération suivante: 7/3 - 4/5";
answers[9] = [];
answers[9][0] = "24/15";
answers[9][1] = "- 3/2";
answers[9][2] = "- 28/15";
answers[9][3] = "- 47/15";

questions[10] = "Quel est le résultat de l'opération suivante: 6/7 - 3/4";
answers1[0] = [];
answers[10][0] = "3/28";
answers[10][1] = "3/3";
answers[10][2] = "- 18/28";
answers[10][3] = "45/28";

questions[11] = "Quel est le résultat de l'opération suivante: 8/3 - 8/5";
answers[11] = [];
answers[11][0] = "16/15";
answers[11][1] = "0/1";
answers[11][2] = "0/(- 2)";
answers[11][3] = "8/15";

questions[12] = "Quel est le résultat de l'opération suivante: 4/1 + 4/2";
answers[12] = [];
answers[12][0] = "6/1";
answers[12][1] = "8/3";
answers[12][2] = "8/2";
answers[12][3] = "6/2";

questions[13] = "Quel est le résultat de l'opération suivante: 32/16 - 5/2";
answers[13] = [];
answers[13][0] = "- 16/32";
answers[13][1] = "27/14";
answers[13][2] = "16/32";
answers[13][3] = "27/32";

questions[14] = "Quel est le résultat de l'opération suivante: 14/3 + 28/5";
answers[14] = [];
answers[14][0] = "154/15";
answers[14][1] = "42/8";
answers[14][2] = "42/15";
answers[14][3] = "- 42/8";

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
  this.obj.y = 2.5/8;
  this.obj.width = 1;
  this.obj.height = 1 / 8;
}

function ButtonObj(content, id, correct) {
  this.obj = new GameObject();
  this.obj.text = content;
  this.obj.width = 3 / 9;
  this.obj.height = 1.5 / 8;
  this.obj.image = game.createImage(buttonSprite[numQ]);
  this.correct = correct;
  this.id = id;
  if (Math.floor(id / 2) == 0) {
    this.obj.y = 4.5 / 8;
  } else {
    this.obj.y = 6.5 / 8;
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
