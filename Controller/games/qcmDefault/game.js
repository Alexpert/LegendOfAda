var questionObj;
var buttonObj = [];
var qAnswered;
var score;
var numQ;

var questions = [];
var answers = [];





questions[0] = "Quel est le carré de 2?";
answers[0] = [];
answers[0][0] = "4";
answers[0][1] = "7";
answers[0][2] = "6";
answers[0][3] = "2";


questions[1] = "Quel est le carré de 3?";
answers[1] = [];
answers[1][0] = "9";
answers[1][1] = "7";
answers[1][2] = "12";
answers[1][3] = "0.33";


questions[2] = "Quel est la taille du pénis de Rocco Siffredi?";
answers[2] = [];
answers[2][0] = "24";
answers[2][1] = "22";
answers[2][2] = "18";
answers[2][3] = "26";



function QuestionObj(content) {
  this.obj = new GameObject();
  this.obj.text = content;
  this.obj.x = 0;
  this.obj.y = 0.5;
  this.obj.width = 1;
  this.obj.height = 1 / 8;

  this.changeTxt = function content(content) {
    this.obj.text = content;
  }
}

function ButtonObj(content, id, correct) {
  this.obj = new GameObject();
  this.obj.text = content;
  this.correct = correct;
  this.id = id;
  if (id / 2 == 0) {
    this.obj.y = 6 / 8;
  } else {
    this.obj.y = 7 / 8;
  }
  if (id % 2 == 0) {
    this.obj.x = 1 / 11;
  } else {
    this.obj.x = 5 / 11;
  }
}

function Score() {
  this.obj = new GameObject();
  this.obj.x = 3 / 8;
  this.obj.y = 0;
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
  questionObj = new QuestionObj(questions[numQ]);

  var offset = Math.floor(Math.random() * 4);
  for (i = 0; i < 4; i++) {
    buttonObj[i] = new ButtonObj(answers[numQ][(i + offset) % 4], i, (i + offset) % 4 == 0);
  }
}

function shuffle() {
  for (i = 0; i < questions.length; i++) {
    var index = Math.floor(Math.random() * questions.length);
    [questions[i], questions[index]] = [questions[index], questions[i]];
    [answers[i], answers[index]] = [answers[index], answers[i]];
  }
}





function setup() {
  shuffle();
  qAnswered = true;
  numQ = 0;
  score = new Score();
}

function update() {
  if (qAnswered) {
    if (numQ == questions.length) {
      game.end(score.obj.text);
    }
    qAnswered = false;
    initQuestion(numQ);
    numQ++;
    console.log(questionObj);
    console.log(buttonObj);
  }

  game.draw(score.obj);
  game.draw(questionObj.obj);
  for (i = 0; i < 4; i++) {
    game.draw(buttonObj[i].obj);
  }
}

function clicked(x, y) {
  for (i = 0; i < 4; i++) {
    if (buttonObj[i].obj.contains(x, y)) {
        qAnswered = true;
      if (answerObj.correct) {
        score.increment();
      } else {
        score.decrement();
      }
    }
  }
}
