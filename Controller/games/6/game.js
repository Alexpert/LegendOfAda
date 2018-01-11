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

var defaultBackground = "assets/Musée_Picasso_Paris_coté_jardin.jpg";
var defaultTextColor = "black";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";



questions[0] = "Quelle expression est égale à (4 + 2)²?";
answers[0] = [];
answers[0][0] = "4² + 2*4*2 + 2²";
answers[0][1] = "4² + 2*4*2 - 2²";
answers[0][2] = "4² + 2²";
answers[0][3] = "16 + 8 + 2²";


questions[1] = "Quelle expression est égale à (4 - 3)²?";
answers[1] = [];
answers[1][0] = "4² + 2*4*3 - 3²";
answers[1][1] = "4² + 3*4*3 - 3²";
answers[1][2] = "4² + 2*4*3 + 3²";
answers[1][3] = "4² + 3*4*3 + 3²";


questions[2] = "Quelle expression est égale à (4 + 2)(4 - 2)?";
answers[2] = [];
answers[2][0] = "4² - 2²";
answers[2][1] = "4² + 2²";
answers[2][2] = "4*2 + 2*4";
answers[2][3] = "2² - 4²";

questions[3] = "Quelle expression est égale à (a + b)²?";
answers[3] = [];
answers[3][0] = "a² + 2*a*b + b²";
answers[3][1] = "a² + 2*a*b - b²";
answers[3][2] = "a² + b²";
answers[3][3] = "2a + b²";

questions[4] = "Quelle expression est égale à (a - b)²?";
answers[4] = [];
answers[4][0] = "a² + 2*a*b - b²";
answers[4][1] = "a² + 2*a*b + b²";
answers[4][2] = "a² + b²";
answers[4][3] = "a² - 2b²";

questions[5] = "Quelle expression est égale à (a + b)(a - b)?";
answers[5] = [];
answers[5][0] = "a² - b²";
answers[5][1] = "a² + b²";
answers[5][2] = "b² - a²";
answers[5][3] = "a² + 2ab - b²";

questions[6] = "Quelle expression est égale à (4 + 2)(3 + 7)?";
answers[6] = [];
answers[6][0] = "4*3 + 4*7 + 2*3 + 2*7";
answers[6][1] = "4*2 + 4*7 + 3*4 + 3*3";
answers[6][2] = "(4*3 + 4*7) - (2*3 + 2*7)";
answers[6][3] = "(4*3 + 4*7) * (2*3 + 2*7)";

questions[7] = "Quelle expression est égale à (3 + 3)²?";
answers[7] = [];
answers[7][0] = "9 + 2*9 + 9";
answers[7][1] = "9 + 2*9 - 9";
answers[7][2] = "3² + 3²";
answers[7][3] = "3² + 2*3² + 3²";

questions[8] = "Quelle expression est égale à (4 + 2)²?";
answers[8] = [];
answers[8][0] = "4² + 2*4*2 + 2²";
answers[8][1] = "4² + 2*4*2 - 2²";
answers[8][2] = "4² + 2²";
answers[8][3] = "16 + 8 + 2²";

questions[9] = "Quelle expression est égale à (5 - 3)²?";
answers[9] = [];
answers[9][0] = "5² + 2*5*3 - 3²";
answers[9][1] = "5² + 3*5*3 - 3²";
answers[9][2] = "5² + 2*5*3 + 3²";
answers[9][3] = "5² + 3*5*3 + 3²";

questions[10] = "Quelle expression est égale à (5 + a)²?";
answers[10] = [];
answers[10][0] = "5² + 2*5*a + a²";
answers[10][1] = "5² + 2*5*a - a²";
answers[10][2] = "5² + a²";
answers[10][3] = "25 + 5a + a²";

questions[11] = "Quelle expression est égale à (5 - 3)²?";
answers[11] = [];
answers[11][0] = "5² + 2*5*3 - 3²";
answers[11][1] = "5² + 3*5*3 - 3²";
answers[11][2] = "5² + 2*5*3 + 3²";
answers[11][3] = "5² + 3*5*3 + 3²";

questions[12] = "Quelle expression est égale à (4 + 1)(2 + b)?";
answers[12] = [];
answers[12][0] = "8 + 4b + 2 + b";
answers[12][1] = "8 + 2b + 4 + b";
answers[12][2] = "8 + 8b + 2 - b";
answers[12][3] = "8 + 4b + 4 - b";

questions[13] = "Quelle expression est égale à (2 + b)²?";
answers[13] = [];
answers[13][0] = "2² + 4b + b²";
answers[13][1] = "2² + 4b - b²";
answers[13][2] = "2² + b²";
answers[13][3] = "4 + b²";

questions[14] = "Quelle expression est égale à (a - 2)²?";
answers[14] = [];
answers[14][0] = "a² + 4a - 2²";
answers[14][1] = "a² + 2*a*b + 2²";
answers[14][2] = "a² + 2²";
answers[14][3] = "a² - 2*2²";

questions[15] = "Quelle expression est égale à (a + 7)(a - 7)?";
answers[15] = [];
answers[15][0] = "a² - 7²";
answers[15][1] = "a² + 7²";
answers[15][2] = "7² - a²";
answers[15][3] = "a² + 14a - 7²";

questions[16] = "Quelle expression est égale à (a + 2)(b + 7)?";
answers[16] = [];
answers[16][0] = "a*b + a*7 + 2*b + 2*7";
answers[16][1] = "a*b + a*7 + b*a + b*2";
answers[16][2] = "(a*b + a*7) - (a*b + b*7)";
answers[16][3] = "(a*b + a*7) * (a*b + b*7)";

questions[17] = "Quelle expression est égale à (x + y)²?";
answers[17] = [];
answers[17][0] = "x² + 2xy + y²";
answers[17][1] = "x² + 2x² - y²";
answers[17][2] = "x² + y²";
answers[17][3] = "x² + 2xy - y²";

questions[18] = "Quelle expression est égale à (b - a)²?";
answers[18] = [];
answers[18][0] = "b² + 2*ba - a²";
answers[18][1] = "a² + 2*ab - b²";
answers[18][2] = "b² + 2*ba + b²";
answers[18][3] = "a² + 2*ab + b²";

questions[19] = "Quelle expression est égale à (4 - a)(4 + a)?";
answers[19] = [];
answers[19][0] = "16 - a²";
answers[19][1] = "16 - 2*4a + a²";
answers[19][2] = "a² - 16";
answers[19][3] = "a² - 2*4a - 16";





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
  this.objContent = new GameObject();
  this.objContent.text = content;

  this.obj.x = 0;
  this.obj.y = 2.5/8;
  this.obj.width = 1;
  this.obj.height = 1 / 8;

  this.objContent.x = 1/20;
  this.objContent.y = 2.5/8;
  this.objContent.width = 0.9;
  this.objContent.height = 1 / 8;

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
  game.draw(questionObj.objContent);
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
