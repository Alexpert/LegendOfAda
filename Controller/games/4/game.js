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

var defaultBackground = "assets/wallpaperAlexGrey.jpg"
var defaultTextColor = "black";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Trouvez la valeur de x pour l'inequation: 2x - 4 < 0";
answers[0] = [];
answers[0][0] = "x < 2";
answers[0][1] = "x > -1/2";
answers[0][2] = "x < -4";
answers[0][3] = "x > 1/2";

questions[1] = "Trouvez la valeur de y pour l'inequation: 18 - 9y > 0";
answers[1] = [];
answers[1][0] = "y > 2";
answers[1][1] = "y > -2";
answers[1][2] = "y > 9";
answers[1][3] = "y < -9";

questions[2] = "Trouvez la valeur de z pour l'inequation: 6z - 16 < 2";
answers[2] = [];
answers[2][0] = "z < 3";
answers[2][1] = "z > 3";
answers[2][2] = "z < 6";
answers[2][3] = "z > 2";

questions[3] = "Trouvez la valeur de x pour l'inequation: 0 < 5x + 25";
answers[3] = [];
answers[3][0] = "x > -5";
answers[3][1] = "x < -5";
answers[3][2] = "x > 5";
answers[3][3] = "x < 5";

questions[4] = "Trouvez la valeur de y pour l'inequation: 5 + 7y > - 12y - 3";
answers[4] = [];
answers[4][0] = "y > -8/19";
answers[4][1] = "y > -4";
answers[4][2] = "y < 2";
answers[4][3] = "y > 12/5";

questions[5] = "Trouvez la valeur de z pour l'inequation: 6z - 4 > 2 - 6z";
answers[5] = [];
answers[5][0] = "z > 1/2";
answers[5][1] = "z > -1/2";
answers[5][2] = "z < 1/2";
answers[5][3] = "z < -1/2";

questions[6] = "Trouvez la valeur de x pour l'inequation: - 24 - 3x < 3x";
answers[6] = [];
answers[6][0] = "x > -6";
answers[6][1] = "x > -24/3";
answers[6][2] = "x > 24/3";
answers[6][3] = "x < -24/3";

questions[7] = "Trouvez la valeur de y pour l'inequation: 0 > 16y - 7";
answers[7] = [];
answers[7][0] = "y > 7/16";
answers[7][1] = "y > -7/16";
answers[7][2] = "y < 7/16";
answers[7][3] = "y < -7/16";

questions[8] = "Trouvez la valeur de z pour l'inequation: - 15z < 5z - 4";
answers[8] = [];
answers[8][0] = "z > 1/5";
answers[8][1] = "z < 1/5";
answers[8][2] = "z > -1/5";
answers[8][3] = "z < -1/5";

questions[9] = "Trouvez la valeur de x pour l'inequation: 8x - 4 > 12 + 4x";
answers[9] = [];
answers[9][0] = "x > 4";
answers[9][1] = "x < 4";
answers[9][2] = "x > 1/4";
answers[9][3] = "x < 1/4";

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
