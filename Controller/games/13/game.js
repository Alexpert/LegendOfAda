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

var defaultBackground = "assets/Secret_base.JPEG"
var defaultTextColor = "white";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Quel est le résultat du quotient suivant: (4/5) * (3/2)";
answers[0] = [];
answers[0][0] = "12/10";
answers[0][1] = "23/10";
answers[0][2] = "15/8";
answers[0][3] = "8/15";

questions[1] = "Quel est le résultat du quotient suivant: (2/3) * (9/7)";
answers[1] = [];
answers[1][0] = "18/21";
answers[1][1] = "41/21";
answers[1][2] = "27/14";
answers[1][3] = "14/27";

questions[2] = "Quel est le résultat du quotient suivant: - (7/2) * (10/4)";
answers[2] = [];
answers[2][0] = "- 70/8";
answers[2][1] = "48/8";
answers[2][2] = "- 20/28";
answers[2][3] = "28/20";

questions[3] = "Quel est le résultat du quotient suivant: (12/7) * (3/4)";
answers[3] = [];
answers[3][0] = "36/28";
answers[3][1] = "69/28";
answers[3][2] = "21/48";
answers[3][3] = "48/21";

questions[4] = "Quel est le résultat du quotient suivant: (8/7) * (- (9/2))";
answers[4] = [];
answers[4][0] = "- 72/14";
answers[4][1] = "79/14";
answers[4][2] = "63/16";
answers[4][3] = "- 16/63";

questions[5] = "Quel est le résultat du quotient suivant: - (5/9) * (13/6)";
answers[5] = [];
answers[5][0] = "- 65/54";
answers[5][1] = "147/54";
answers[5][2] = "- 117/30";
answers[5][3] = "30/117";

questions[6] = "Quel est le résultat du quotient suivant: (1/2) * (15/8)";
answers[6] = [];
answers[6][0] = "15/16";
answers[6][1] = "19/16";
answers[6][2] = "30/8";
answers[6][3] = "8/30";

questions[7] = "Quel est le résultat du quotient suivant: - (7/3) * (- (16/12))";
answers[7] = [];
answers[7][0] = "112/36";
answers[7][1] = "- 1";
answers[7][2] = "- 48/84";
answers[7][3] = "- 84/48";

questions[8] = "Quel est le résultat du quotient suivant: - (6/14) * (18/4)";
answers[8] = [];
answers[8][0] = "- 108/56";
answers[8][1] = "228/56";
answers[8][2] = "- 252/24";
answers[8][3] = "24/252";

questions[9] = "Quel est le résultat du quotient suivant: (3/7) * (- (12/5))";
answers[9] = [];
answers[9][0] = "- 36/35";
answers[9][1] = "- 1";
answers[9][2] = "1";
answers[9][3] = "- 9/2";

questions[10] = "Quel est le résultat du quotient suivant: (2/9) * (15/4)";
answers[10] = [];
answers[10][0] = "30/36";
answers[10][1] = "17/13";
answers[10][2] = "6/24";
answers[10][3] = "135/8";

questions[11] = "Quel est le résultat du quotient suivant: - (16/6) * (14/4)";
answers[11] = [];
answers[11][0] = "- 224/24";
answers[11][1] = "10";
answers[11][2] = "- 1";
answers[11][3] = "- 2/2";

questions[12] = "Quel est le résultat du quotient suivant: (3/13) * (5/14)";
answers[12] = [];
answers[12][0] = "15/182";
answers[12][1] = "8/27";
answers[12][2] = "42/65";
answers[12][3] = "- 65/42";

questions[13] = "Quel est le résultat du quotient suivant: - () * ()";
answers[13] = [];
answers[13][0] = "";
answers[13][1] = "";
answers[13][2] = "";
answers[13][3] = "";

questions[14] = "Quel est le résultat du quotient suivant: () * (- ())";
answers[14] = [];
answers[14][0] = "";
answers[14][1] = "";
answers[14][2] = "";
answers[14][3] = "";

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
