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

var defaultBackground = "assets/Yurt_mongole.jpg"
var defaultTextColor = "white";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "black";

questions[0] = "Trouvez le quotient qui est égale a la fraction suivante: 5/6";
answers[0] = [];
answers[0][0] = "15/18";
answers[0][1] = "5/12";
answers[0][2] = "10/6";
answers[0][3] = "15/16";

questions[1] = "Trouvez le quotient qui est égale a la fraction suivante: 9/4";
answers[1] = [];
answers[1][0] = "81/36";
answers[1][1] = "45/40";
answers[1][2] = "19/14";
answers[1][3] = "9/2";

questions[2] = "Trouvez le quotient qui est égale a la fraction suivante: 49/21";
answers[2] = [];
answers[2][0] = "7/3";
answers[2][1] = "97/42";
answers[2][2] = "7/7";
answers[2][3] = "9/3";

questions[3] = "Trouvez le quotient qui est égale a la fraction suivante: 6/9";
answers[3] = [];
answers[3][0] = "2/3";
answers[3][1] = "8/11";
answers[3][2] = "2/9";
answers[3][3] = "2/6";

questions[4] = "Trouvez le quotient qui est égale a la fraction suivante: 21/33";
answers[4] = [];
answers[4][0] = "7/11";
answers[4][1] = "15/22";
answers[4][2] = "14/21";
answers[4][3] = "2/3";

questions[5] = "Trouvez le quotient qui est égale a la fraction suivante: 8/9";
answers[5] = [];
answers[5][0] = "16/18";
answers[5][1] = "4/5";
answers[5][2] = "10/11";
answers[5][3] = "8/10";

questions[6] = "Trouvez le quotient qui est égale a la fraction suivante: - 3/6";
answers[6] = [];
answers[6][0] = "- 1/2";
answers[6][1] = "1/2";
answers[6][2] = "1/3";
answers[6][3] = "- 1/3";

questions[7] = "Trouvez le quotient qui est égale a la fraction suivante: 18/6";
answers[7] = [];
answers[7][0] = "3";
answers[7][1] = "6/3";
answers[7][2] = "3/2";
answers[7][3] = "10/3";

questions[8] = "Trouvez le quotient qui est égale a la fraction suivante: - 5/2";
answers[8] = [];
answers[8][0] = "- 15/6";
answers[8][1] = "15/6";
answers[8][2] = "- 15/5";
answers[8][3] = "5/2";

questions[9] = "Trouvez le quotient qui est égale a la fraction suivante: 20/4";
answers[9] = [];
answers[9][0] = "5";
answers[9][1] = "- 4/1";
answers[9][2] = "20/1";
answers[9][3] = "4/4";

questions[10] = "Trouvez le quotient qui est égale a la fraction suivante: - 36/6";
answers[10] = [];
answers[10][0] = "- 6";
answers[10][1] = "6";
answers[10][2] = "- 36";
answers[10][3] = "- 6/6";

questions[11] = "Trouvez le quotient qui est égale a la fraction suivante: 110/220";
answers[11] = [];
answers[11][0] = "11/22";
answers[11][1] = "10/2";
answers[11][2] = "1/20";
answers[11][3] = "20/10";

questions[12] = "Trouvez le quotient qui est égale a la fraction suivante: 25/15";
answers[12] = [];
answers[12][0] = "5/3";
answers[12][1] = "1/5";
answers[12][2] = "5/12";
answers[12][3] = "5/10";

questions[13] = "Trouvez le quotient qui est égale a la fraction suivante: 42/21";
answers[13] = [];
answers[13][0] = "6/3";
answers[13][1] = "21/21";
answers[13][2] = "24/12";
answers[13][3] = "2/3";

questions[14] = "Trouvez le quotient qui est égale a la fraction suivante: 64/84";
answers[14] = [];
answers[14][0] = "32/42";
answers[14][1] = "6/15";
answers[14][2] = "8/12";
answers[14][3] = "124/168";

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
