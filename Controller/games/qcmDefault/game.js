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

////////////////////////////////////////////////////////////////////////////////
// Modifiez les valeur pour créer votre QCM
////////////////////////////////////////////////////////////////////////////////
// Vous pouvez creer autant de questions que vous souhaitez.
// Celles-sont numérotées à partir de 0, elles aparraitront à l'utilisateur dans un ordre alétoire
// Vous devez mettre pour chaques question, 4 réponses et un background (image de fond)
// Attention vous devez mettre un ";" à la fin de chaque instruction.
//
// La variable question contient l'énoncé de toutes les questions
// Exemple: question[0] contient l'énoncé de la question 0
//          question[1] contient l'énoncé de la question 1, etc...
//          question[2] = "Combien font 2 x 2?"; initialise la question 2
//
// La variable answers contient toutes les réponses d'une questions
// Vous devez pour chaque question avant de donner les réponse, donner l'instruction: answers[numéro de question] = [];
// Exemple: answers[0] contient toutes les 4 réponses à la question 0
//          Les 4 réponses sont numérotées de 0 à 3, la réponse 0 est la bonne réréponse
//          La position des réponses sera aléatoire, vous n'avez pas à vous en occuper
//          Exemple answers[0][0] contient la première réponse à la question 0
//                  answers[7][3] = "45"; initialise la 4ème réponse de la question 7 à 45;
//
// La variable backgrounds, contient le chemin vers l'image de fond des questions
// Vous devez ajouter l'image au dossier "assets" du QCM
// Exemple: background[3] = "assets/imagedefond.png";
//          initialise l'image de fond de la question 4 à imagedefond.png
//
// La variable textColor contient les couleur dans laquelle est écrit l'énoncé de la questions
// veillez à l'adapter au fond que vous utilisez
// Exemple: textColor[1] = "white";
//
// Vous pouvez Customiser les boutons de réponse:
// Pour changer l'image de fond des boutons, utilisez la viariable buttonSprite
// Exemple: buttonSprite[2] = "assets/imageBoutons.png";
//
// Pour changer la couleur dans laquelle est écrite la réponse, utilisez la variable buttonTextColor
// Exemple: buttonTextColor[1] = "red";
////////////////////////////////////////////////////////////////////////////////
// Modifiez à partir d'ici pour ajouter et modifier les questions du QCM
////////////////////////////////////////////////////////////////////////////////

var defaultBackground = "assets/wallpaperAlexGrey.jpg";
var defaultTextColor = "red";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "blue";

questions[0] = "12345678901234567890123456789";
answers[0] = [];
answers[0][0] = "123456789";
answers[0][1] = "1234567891";
answers[0][2] = "Triangle rectangle";
answers[0][3] = "123456789123456789123456789123456789";

questions[1] = "12345678901234567890123456789";
answers[1] = [];
answers[1][0] = "123456789";
answers[1][1] = "1234567891";
answers[1][2] = "Triangle rectangle";
answers[1][3] = "123456789123456789123456789123456789";
backgrounds[1] = "assets/kurtzgesagt-blueMarble.png"
textColor[1] = "white";
buttonSprite[1] = "assets/button.png";
buttonTextColor[1] = "red";


questions[2] = "12345678901234567890123456789";
answers[2] = [];
answers[2][0] = "123456789";
answers[2][1] = "1234567891";
answers[2][2] = "Triangle rectangle";
answers[2][3] = "123456789123456789123456789123456789";

questions[3] = "12345678901234567890123456789";
answers[3] = [];
answers[3][0] = "123456789";
answers[3][1] = "1234567891";
answers[3][2] = "Triangle rectangle";
answers[3][3] = "123456789123456789123456789123456789";

questions[4] = "12345678901234567890123456789";
answers[4] = [];
answers[4][0] = "123456789";
answers[4][1] = "1234567891";
answers[4][2] = "Triangle rectangle";
answers[4][3] = "123456789123456789123456789123456789";
backgrounds[4] = "assets/kurtzgesagt-blueMarble.png"
textColor[4] = "white";
buttonSprite[4] = "assets/button.png";
buttonTextColor[4] = "red";


questions[5] = "12345678901234567890123456789";
answers[5] = [];
answers[5][0] = "123456789";
answers[5][1] = "1234567891";
answers[5][2] = "Triangle rectangle";
answers[5][3] = "123456789123456789123456789123456789";

questions[6] = "12345678901234567890123456789";
answers[6] = [];
answers[6][0] = "123456789";
answers[6][1] = "1234567891";
answers[6][2] = "Triangle rectangle";
answers[6][3] = "123456789123456789123456789123456789";

questions[7] = "12345678901234567890123456789";
answers[7] = [];
answers[7][0] = "123456789";
answers[7][1] = "1234567891";
answers[7][2] = "Triangle rectangle";
answers[7][3] = "123456789123456789123456789123456789";
backgrounds[7] = "assets/kurtzgesagt-blueMarble.png"
textColor[7] = "white";
buttonSprite[7] = "assets/button.png";
buttonTextColor[7] = "red";

questions[8] = "12345678901234567890123456789";
answers[8] = [];
answers[8][0] = "123456789";
answers[8][1] = "1234567891";
answers[8][2] = "Triangle rectangle";
answers[8][3] = "123456789123456789123456789123456789";

questions[9] = "12345678901234567890123456789";
answers[9] = [];
answers[9][0] = "123456789";
answers[9][1] = "1234567891";
answers[9][2] = "Triangle rectangle";
answers[9][3] = "123456789123456789123456789123456789";

questions[10] = "12345678901234567890123456789";
answers[10] = [];
answers[10][0] = "123456789";
answers[10][1] = "1234567891";
answers[10][2] = "Triangle rectangle";
answers[10][3] = "123456789123456789123456789123456789";
backgrounds[10] = "assets/kurtzgesagt-blueMarble.png"
textColor[10] = "white";
buttonSprite[10] = "assets/button.png";
buttonTextColor[10] = "red";


questions[11] = "12345678901234567890123456789";
answers[11] = [];
answers[11][0] = "123456789";
answers[11][1] = "1234567891";
answers[11][2] = "Triangle rectangle";
answers[11][3] = "123456789123456789123456789123456789";

////////////////////////////////////////////////////////////////////////////////
// Ne pas toucher au code à partir de ce point
////////////////////////////////////////////////////////////////////////////////

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
  this.obj.y = 2.5/8;
  this.obj.width = 1;
  this.obj.height = 1 / 8;
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
