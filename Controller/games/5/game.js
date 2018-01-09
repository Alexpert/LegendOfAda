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

questions[0] = "Trouvez la valeur de x pour l'équation: 4x + 6 = 0";
answers[0] = [];
answers[0][0] = "x = -3/2";
answers[0][1] = "x = 2/3";
answers[0][2] = "x = -6/3";
answers[0][3] = "x = 4/6";

questions[1] = "Trouvez la valeur de x pour l'équation: 5 - 8x = 0";
answers[1] = [];
answers[1][0] = "x = 5/8";
answers[1][1] = "x = -8/5";
answers[1][2] = "x = 3";
answers[1][3] = "x = -5/8";

questions[2] = "Trouvez la valeur de y pour l'équation: 7y - 1 = 2y + 3";
answers[2] = [];
answers[2][0] = "y = 4/5";
answers[2][1] = "y = -5/4";
answers[2][2] = "y = 2/3";
answers[2][3] = "y = -7/2";

questions[3] = "Trouvez la valeur de y pour l'équation: - 8 - 2y = 0";
answers[3] = [];
answers[3][0] = "y = -4";
answers[3][1] = "y = -2/8";
answers[3][2] = "y = 4/8";
answers[3][3] = "y = -2";

questions[4] = "Trouvez la valeur de z pour l'équation: 12z + 6 = - 3 + 3z";
answers[4] = [];
answers[4][0] = "z = -1";
answers[4][1] = "z = 1";
answers[4][2] = "z = 12/3";
answers[4][3] = "z = 9/2";

questions[5] = "Trouvez la valeur de z pour l'équation: 10 - 5z = - 2z + 1";
answers[5] = [];
answers[5][0] = "z = 3";
answers[5][1] = "z = 10/2";
answers[5][2] = "z = -10/5";
answers[5][3] = "z = 5";

questions[6] = "Trouvez la valeur de y pour l'équation: y - 4 = 8 + 2y";
answers[6] = [];
answers[6][0] = "y = -12";
answers[6][1] = "y = -8/2";
answers[6][2] = "y = 4";
answers[6][3] = "y = 2/3";

questions[7] = "Trouvez la valeur de x pour l'équation: 9 = 7x - 19";
answers[7] = [];
answers[7][0] = "x = 4";
answers[7][1] = "x = 10/7";
answers[7][2] = "x = 9/7";
answers[7][3] = "x = -14";

questions[8] = "Trouvez la valeur de y pour l'équation: 2y + 17 = 5y + 2";
answers[8] = [];
answers[8][0] = "y = 5";
answers[8][1] = "y = 19/7";
answers[8][2] = "y = -15/7";
answers[8][3] = "y = -7";

questions[9] = "Trouvez la valeur de z pour l'équation: 3z - 25 = 11 - 5z";
answers[9] = [];
answers[9][0] = "z = 9/2";
answers[9][1] = "z = -4";
answers[9][2] = "z = 6";
answers[9][3] = "z = -18/3";

questions[10] = "Trouvez la valeur de x pour l'équation: 0 = 14 - 6x";
answers[10] = [];
answers[10][0] = "x = 7/3";
answers[10][1] = "x = -8";
answers[10][2] = "x = 20";
answers[10][3] = "x = 14/3";

questions[11] = "Trouvez la valeur de y pour l'équation: 0 = 21 + 7y";
answers[11] = [];
answers[11][0] = "y = -3";
answers[11][1] = "y = 7/21";
answers[11][2] = "y = 3";
answers[11][3] = "y = -21/7";

questions[12] = "Trouvez la valeur de z pour l'équation: 14z = 4z + 40";
answers[12] = [];
answers[12][0] = "z = 4";
answers[12][1] = "z = -4";
answers[12][2] = "z = 10";
answers[12][3] = "z = 2";

questions[13] = "Trouvez la valeur de x pour l'équation: 30 - 9x = 0";
answers[13] = [];
answers[13][0] = "x = 10/3";
answers[13][1] = "x = -3";
answers[13][2] = "x = 3";
answers[13][3] = "x = 10";

questions[14] = "Trouvez la valeur de y pour l'équation: 3y + 6 = 0";
answers[14] = [];
answers[14][0] = "y = -2";
answers[14][1] = "y = 1/2";
answers[14][2] = "y = 2";
answers[14][3] = "y = -1/2";

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
