var questionObj;
var buttonObj = [];
var qAnswered;
var score;
var numQ;

var questions = [];
var answers = [];





questions[0] = "Quelle est le carré de 2?";
answers[0] = [];
answers[0][0] = "4";
answers[0][0] = "7";
answers[0][0] = "6";
answers[0][0] = "2";







function QuestionObj(content) {
  this.obj = GameObject();
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
  this.x = 3 / 8;
  this.y = 0;
  this.width = 2 / 8;
  this.height = 1 / 11;
  this.text = 0;

  this.increment = function() {
    this.text += 5;
  }

  this.decrement = function() {
    this.text -= 5;
  }
}

function initQuestion(num) {
  console.log("initializing question");
  questionObj = QuestionObj(questions[numQ]);

  var offset = Math.floor(Math.random() * 4);
  for (i = 0; i < 4; i++) {
    buttonObj[i] = ButtonObj(answers[i][(i + offset) % 4], i, i + offset == 0);
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
  score = Score();
}

function update() {
  if (qAnswered) {
    if (numQ == questions.length) {
      game.end(score.text);
    }
    qAnswered = false;
    initQuestion(numQ);
    numQ++;
  }

  game.draw(score);
  game.draw(questionObj);
  for (i = 0; i < 4; i++) {
    game.draw(answerObj[i]);
  }
}

function clicked(x, y) {
  for (i = 0; i < 4; i++) {
    if (answerObj[i].obj.contains(x, y)) {
        qAnswered = true;
      if (answerObj.correct) {
        score.increment();
      } else {
        score.decrement();
      }
    }
  }
}
