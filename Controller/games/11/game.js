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

var defaultBackground = "assets/Chinggis_Khan.jpg"
var defaultTextColor = "black";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Développer l'équation suivante: 4a * (5a + 7b)";
answers[0] = [];
answers[0][0] = "20a + 24ab";
answers[0][1] = "48ab";
answers[0][2] = "9a + 11ab";
answers[0][3] = "27ab";

questions[1] = "Développer l'équation suivante: 8 * (6a + b)";
answers[1] = [];
answers[1][0] = "48a + 8b";
answers[1][1] = "14a + b";
answers[1][2] = "14ab";
answers[1][3] = "6a + 8b";

questions[2] = "Développer l'équation suivante: (2a + 7b) * (5a - 3b)";
answers[2] = [];
answers[2][0] = "10a + 29ab - 21b";
answers[2][1] = "9ab * 2ab";
answers[2][2] = "7a + 4b";
answers[2][3] = "11ab";

questions[3] = "Développer l'équation suivante: (4a - 11b) * (8a + c)";
answers[3] = [];
answers[3][0] = "32a + 4ac - 88ab -11bc";
answers[3][1] = "- 7ab * ac";
answers[3][2] = "12a - 11b + c";
answers[3][3] = "2abc";

questions[4] = "Développer l'équation suivante: (3a + 5b) * (6a - 3b)";
answers[4] = [];
answers[4][0] = "18a + 21ab - 15b";
answers[4][1] = "8ab * 3ab";
answers[4][2] = "9a + 2b";
answers[4][3] = "11ab";

questions[5] = "Développer l'équation suivante: (12a - 4) * (2a - 3)";
answers[5] = [];
answers[5][0] = "24a^2 - 42a + 12";
answers[5][1] = "8a * (- a)";
answers[5][2] = "14a - 7";
answers[5][3] = "7a";

questions[6] = "Développer l'équation suivante: (16a - 7) * 3";
answers[6] = [];
answers[6][0] = "48a - 21";
answers[6][1] = "27a";
answers[6][2] = "- 5a";
answers[6][3] = "16a * (- 21)";

questions[7] = "Développer l'équation suivante: 5x - 2 * (3x + 7)";
answers[7] = [];
answers[7][0] = "- x - 14";
answers[7][1] = "3x * 10x";
answers[7][2] = "8x + 5";
answers[7][3] = "13x";

questions[8] = "Développer l'équation suivante: 24x + 4 * (6x - 5)";
answers[8] = [];
answers[8][0] = "48x - 20";
answers[8][1] = "28x * x";
answers[8][2] = "30x - 1";
answers[8][3] = "29x";

questions[9] = "Développer l'équation suivante: 3x * (15x + 4)";
answers[9] = [];
answers[9][0] = "45x^2 + 12x";
answers[9][1] = "3x * 19x";
answers[9][2] = "45x + 4";
answers[9][3] = "49x";

questions[10] = "Développer l'équation suivante: (13 - 6x) * 8x";
answers[10] = [];
answers[10][0] = "104x - 48x^2";
answers[10][1] = "- 7x * 8x";
answers[10][2] = "13 - 48x";
answers[10][3] = "- 35x";

questions[11] = "Développer l'équation suivante: (22 + 4x) * (- 7x)";
answers[11] = [];
answers[11][0] = "- 24x^2 + -154x";
answers[11][1] = "26x * (- 7x)";
answers[11][2] = "- 24x + 22";
answers[11][3] = "- 2x";

questions[12] = "Développer l'équation suivante: (- 2x - 5) * (- 7 - 6x)";
answers[12] = [];
answers[12][0] = "12x^2 + 34x + 35";
answers[12][1] = "- 7x * (- 13x)";
answers[12][2] = "- 8x - 12";
answers[12][3] = "- 20x";

questions[13] = "Développer l'équation suivante: 6x * (14x - 2)";
answers[13] = [];
answers[13][0] = "84x^2 - 12x";
answers[13][1] = "72x^2";
answers[13][2] = "84x^2 - 2";
answers[13][3] = "84x - 2";

questions[14] = "Développer l'équation suivante: (- 4 - 7x) * (- 4x)";
answers[14] = [];
answers[14][0] = "28x^2 + 16x";
answers[14][1] = "- 8x - 28x^2";
answers[14][2] = "- 8x - 11x";
answers[14][3] = "- 4 + 28x^2";

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
  game.end(score.obj.text);
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
