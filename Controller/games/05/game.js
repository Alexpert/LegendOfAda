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
var defaultTextColor = "white";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Développer l'équation suivante: 4a (5a + 7b)";
answers[0] = [];
answers[0][0] = "20a + 24ab";
answers[0][1] = "48ab";
answers[0][2] = "9a + 11ab";
answers[0][3] = "27ab";

questions[1] = "Développer l'équation suivante: 8 (6a + b)";
answers[1] = [];
answers[1][0] = "48a + 8b";
answers[1][1] = "14a + b";
answers[1][2] = "14ab";
answers[1][3] = "6a + 8b";

questions[2] = "Développer l'équation suivante: (2a + 7b)(5a - 3b)";
answers[2] = [];
answers[2][0] = "10a + 29ab - 21b";
answers[2][1] = "9ab * 2ab";
answers[2][2] = "7a + 4b";
answers[2][3] = "11ab";

questions[3] = "Développer l'équation suivante: (4a - 11b)(8a + c)";
answers[3] = [];
answers[3][0] = "32a + 4ac - 88ab -11bc";
answers[3][1] = "- 7ab * ac";
answers[3][2] = "";
answers[3][3] = "";

questions[4] = "Développer l'équation suivante:";
answers[4] = [];
answers[4][0] = "";
answers[4][1] = "";
answers[4][2] = "";
answers[4][3] = "";

questions[5] = "Développer l'équation suivante:";
answers[5] = [];
answers[5][0] = "";
answers[5][1] = "";
answers[5][2] = "";
answers[5][3] = "";

questions[6] = "Développer l'équation suivante:";
answers[6] = [];
answers[6][0] = "";
answers[6][1] = "";
answers[6][2] = "";
answers[6][3] = "";

questions[7] = "Développer l'équation suivante:";
answers[7] = [];
answers[7][0] = "";
answers[7][1] = "";
answers[7][2] = "";
answers[7][3] = "";

questions[8] = "Développer l'équation suivante:";
answers[8] = [];
answers[8][0] = "";
answers[8][1] = "";
answers[8][2] = "";
answers[8][3] = "";

questions[9] = "Développer l'équation suivante:";
answers[9] = [];
answers[9][0] = "";
answers[9][1] = "";
answers[9][2] = "";
answers[9][3] = "";

questions[10] = "Développer l'équation suivante:";
answers[10] = [];
answers[10][0] = "";
answers[10][1] = "";
answers[10][2] = "";
answers[10][3] = "";

questions[11] = "Développer l'équation suivante:";
answers[11] = [];
answers[11][0] = "";
answers[11][1] = "";
answers[11][2] = "";
answers[11][3] = "";

questions[12] = "Développer l'équation suivante:";
answers[12] = [];
answers[12][0] = "";
answers[12][1] = "";
answers[12][2] = "";
answers[12][3] = "";

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
