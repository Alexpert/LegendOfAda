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

questions[0] = "Quel est le plus grand diviseur parmis les suivants de: 1 676";
answers[0] = [];
answers[0][0] = "2";
answers[0][1] = "6";
answers[0][2] = "3";
answers[0][3] = "9";

questions[1] = "Quel est le plus grand diviseur parmis les suivants de: 52";
answers[1] = [];
answers[1][0] = "4";
answers[1][1] = "5";
answers[1][2] = "9";
answers[1][3] = "2";

questions[2] = "Quel est le plus grand diviseur parmis les suivants de: 732";
answers[2] = [];
answers[2][0] = "6";
answers[2][1] = "9";
answers[2][2] = "5";
answers[2][3] = "3";

questions[3] = "Quel est le plus grand diviseur parmis les suivants de: 26";
answers[3] = [];
answers[3][0] = "2";
answers[3][1] = "3";
answers[3][2] = "6";
answers[3][3] = "8";

questions[4] = "Quel est le plus grand diviseur parmis les suivants de: 256";
answers[4] = [];
answers[4][0] = "8";
answers[4][1] = "9";
answers[4][2] = "5";
answers[4][3] = "2";

questions[5] = "Quel est le plus grand diviseur parmis les suivants de: 71 656";
answers[5] = [];
answers[5][0] = "8";
answers[5][1] = "6";
answers[5][2] = "9";
answers[5][3] = "3";

questions[6] = "Quel est le plus grand diviseur parmis les suivants de: 5 994";
answers[6] = [];
answers[6][0] = "9";
answers[6][1] = "4";
answers[6][2] = "8";
answers[6][3] = "2";

questions[7] = "Quel est le plus petit diviseur parmis les suivants de: 1 984";
answers[7] = [];
answers[7][0] = "2";
answers[7][1] = "4";
answers[7][2] = "6";
answers[7][3] = "8";

questions[8] = "Quel est le plus petit diviseur parmis les suivants de: 195";
answers[8] = [];
answers[8][0] = "3";
answers[8][1] = "5";
answers[8][2] = "6";
answers[8][3] = "9";

questions[9] = "Quel est le plus petit diviseur parmis les suivants de: 3 661";
answers[9] = [];
answers[9][0] = "7";
answers[9][1] = "3";
answers[9][2] = "5";
answers[9][3] = "9";

questions[10] = "Quel est le plus petit diviseur parmis les suivants de: 374 805";
answers[10] = [];
answers[10][0] = "3";
answers[10][1] = "2";
answers[10][2] = "5";
answers[10][3] = "9";

questions[11] = "Quel est le plus petit diviseur parmis les suivants de: 45";
answers[11] = [];
answers[11][0] = "3";
answers[11][1] = "9";
answers[11][2] = "5";
answers[11][3] = "4";

questions[12] = "Quel est le plus petit diviseur parmis les suivants de: 95";
answers[12] = [];
answers[12][0] = "5";
answers[12][1] = "3";
answers[12][2] = "6";
answers[12][3] = "9";

questions[13] = "Quel est le plus petit diviseur parmis les suivants de: 32 243";
answers[13] = [];
answers[13][0] = "19";
answers[13][1] = "3";
answers[13][2] = "6";
answers[13][3] = "9";

questions[14] = "Quel est le plus petit diviseur parmis les suivants de: 159";
answers[14] = [];
answers[14][0] = "3";
answers[14][1] = "6";
answers[14][2] = "9";
answers[14][3] = "7";

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
