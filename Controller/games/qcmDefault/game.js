var questionObj;
var buttonObj = [];
var qAnswered;
var score;
var numQ;
var fin = false;

var questions = [];
var answers = [];
var backgrounds = [];

////////////////////////////////////////////////////////////////////////////////
// Modifiez les valeur pour créer votre QCM
////////////////////////////////////////////////////////////////////////////////
// Vous pouvez crer autant de questions que vous souhaitez.
// Celles-sont numérotées à partir de 0.
// Vous devez mettre pour chaques question, 4 réponses et un background (image de fond)
//
// La variable question contient l'énoncé de toutes les questions
// Exemple: question[0] contient l'énoncé de la question 0
//          question[1] contient l'énoncé de la question 1, etc...
//
// La variable answers contient toutes les réponses d'une questions
// Exemple: answers[0] contient toutes les 4 réponses à la question 0
//          Les 4 réponses sont numérotées de 0 à 3, la réponse 0 est la bonne réréponse
//          La position des réponses sera aléatoire, vous n'avez pas à vous en occuper
//          Exemple answers[0][0] contient la première réponse à la question 0
//                  answers[7][3] contient la dernière réponse à la question 7 (donc la huitième)
//
// La variable backgrounds, contient le chemin vers l'image de fond des questions
//          Exemple background[3] = "assets/imagedefond.png";
//                  initialise l'image de fond de la question 4 ) imagedefond.png



questions[0] = "Quel est le carré de 2?";
answers[0] = [];
answers[0][0] = "4";
answers[0][1] = "7";
answers[0][2] = "6";
answers[0][3] = "2";
backgrounds[0] = "assets/kurtzgesagt-blueMarble.png";


questions[1] = "Quel est le carré de 3?";
answers[1] = [];
answers[1][0] = "9";
answers[1][1] = "7";
answers[1][2] = "12";
answers[1][3] = "0.33";
backgrounds[1] = "assets/wallpaperAlexGrey.jpg";


questions[2] = "Quel est la taille du pénis de Rocco Siffredi?";
answers[2] = [];
answers[2][0] = "24";
answers[2][1] = "22";
answers[2][2] = "18";
answers[2][3] = "26";
backgrounds[2] = "assets/Rocco-Siffredi.jpeg";


////////////////////////////////////////////////////////////////////////////////
// Ne pas toucher au code à partir de ce point
////////////////////////////////////////////////////////////////////////////////

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
  this.obj.width = 3 / 11;
  this.obj.height = 1 / 8;
  this.correct = correct;
  this.id = id;
  if (Math.floor(id / 2) == 0) {
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


function setup() {
  shuffle();
  score = new Score();
  //game.setBackground("assets/Rocco-Siffredi.jpeg");

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
    game.draw(score.obj);
    game.draw(questionObj.obj);
    for (i = 0; i < 4; i++) {
      game.draw(buttonObj[i].obj);
    }
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
