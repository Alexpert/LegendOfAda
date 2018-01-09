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


questions[0] = "Quelle expression est égale à (4 + 2)²?";
answers[0] = [];
answers[0][0] = "4² + 2*4*2 + 2²";
answers[0][1] = "4² + 2*4*2 - 2²";
answers[0][2] = "4² + 2²";
answers[0][3] = "16 + 8 + 2²";
backgrounds[0] = "assets/background.png"
textColor[0] = "white";
buttonSprite[0] = "assets/button.png";
buttonTextColor[0] = "red";

questions[1] = "Quelle expression est égale à (4 - 3)²?";
answers[1] = [];
answers[1][0] = "4² + 2*4*3 - 3²";
answers[1][1] = "4² + 3*4*3 - 3²";
answers[1][2] = "4² + 2*4*3 + 3²";
answers[1][3] = "4² + 3*4*3 + 3²";
backgrounds[1] = "assets/background.png"
textColor[1] = "white";
buttonSprite[1] = "assets/button.png";
buttonTextColor[1] = "red";

questions[2] = "Quelle expression est égale à (4 + 2)(4 - 2)?";
answers[2] = [];
answers[2][0] = "4² - 2²";
answers[2][1] = "4² + 2²";
answers[2][2] = "4*2 + 2*4";
answers[2][3] = "2² - 4²";
backgrounds[2] = "assets/background.png"
textColor[2] = "white";
buttonSprite[2] = "assets/button.png";
buttonTextColor[2] = "red";

questions[3] = "Quelle expression est égale à (a + b)²?";
answers[3] = [];
answers[3][0] = "a² + 2*a*b + b²";
answers[3][1] = "a² + 2*a*b - b²";
answers[3][2] = "a² + b²";
answers[3][3] = "2a + b²";
backgrounds[3] = "assets/background.png"
textColor[3] = "white";
buttonSprite[3] = "assets/button.png";
buttonTextColor[3] = "red";

questions[4] = "Quelle expression est égale à (a - b)²?";
answers[4] = [];
answers[4][0] = "a² + 2*a*b - b²";
answers[4][1] = "a² + 2*a*b + b²";
answers[4][2] = "a² + b²";
answers[4][3] = "a² - 2b²";
backgrounds[4] = "assets/background.png"
textColor[4] = "white";
buttonSprite[4] = "assets/button.png";
buttonTextColor[4] = "red";

questions[5] = "Quelle expression est égale à (a + b)(a - b)?";
answers[5] = [];
answers[5][0] = "a² - b²";
answers[5][1] = "a² + b²";
answers[5][2] = "b² - a²";
answers[5][3] = "a² + 2ab - b²";
backgrounds[5] = "assets/background.png"
textColor[5] = "white";
buttonSprite[5] = "assets/button.png";
buttonTextColor[5] = "red";

questions[6] = "Quelle expression est égale à (4 + 2)(3 + 7)?";
answers[6] = [];
answers[6][0] = "4*3 + 4*7 + 2*3 + 2*7";
answers[6][1] = "4*2 + 4*7 + 3*4 + 3*3";
answers[6][2] = "(4*3 + 4*7) - (2*3 + 2*7)";
answers[6][3] = "(4*3 + 4*7) * (2*3 + 2*7)";
backgrounds[6] = "assets/background.png"
textColor[6] = "white";
buttonSprite[6] = "assets/button.png";
buttonTextColor[6] = "red";

questions[7] = "Quelle expression est égale à (3 + 3)²?";
answers[7] = [];
answers[7][0] = "9 + 2*9 + 9";
answers[7][1] = "9 + 2*9 - 9";
answers[7][2] = "3² + 3²";
answers[7][3] = "3² + 2*3² + 3²";
backgrounds[7] = "assets/background.png"
textColor[7] = "white";
buttonSprite[7] = "assets/button.png";
buttonTextColor[7] = "red";

questions[8] = "Quelle expression est égale à (4 + 2)²?";
answers[8] = [];
answers[8][0] = "4² + 2*4*2 + 2²";
answers[8][1] = "4² + 2*4*2 - 2²";
answers[8][2] = "4² + 2²";
answers[8][3] = "16 + 8 + 2²";
backgrounds[8] = "assets/background.png"
textColor[8] = "white";
buttonSprite[8] = "assets/button.png";
buttonTextColor[8] = "red";

questions[9] = "Quelle expression est égale à (5 - 3)²?";
answers[9] = [];
answers[9][0] = "5² + 2*5*3 - 3²";
answers[9][1] = "5² + 3*5*3 - 3²";
answers[9][2] = "5² + 2*5*3 + 3²";
answers[9][3] = "5² + 3*5*3 + 3²";
backgrounds[9] = "assets/background.png"
textColor[9] = "white";
buttonSprite[9] = "assets/button.png";
buttonTextColor[9] = "red";

questions[10] = "Quelle expression est égale à (5 + a)²?";
answers[10] = [];
answers[10][0] = "5² + 2*5*a + a²";
answers[10][1] = "5² + 2*5*a - a²";
answers[10][2] = "5² + a²";
answers[10][3] = "25 + 5a + a²";
backgrounds[10] = "assets/background.png"
textColor[10] = "white";
buttonSprite[10] = "assets/button.png";
buttonTextColor[10] = "red";

questions[11] = "Quelle expression est égale à (5 - 3)²?";
answers[11] = [];
answers[11][0] = "5² + 2*5*3 - 3²";
answers[11][1] = "5² + 3*5*3 - 3²";
answers[11][2] = "5² + 2*5*3 + 3²";
answers[11][3] = "5² + 3*5*3 + 3²";
backgrounds[11] = "assets/background.png"
textColor[11] = "white";
buttonSprite[11] = "assets/button.png";
buttonTextColor[11] = "red";

questions[12] = "Quelle expression est égale à (4 + 1)(2 + b)?";
answers[12] = [];
answers[12][0] = "8 + 4b + 2 + b";
answers[12][1] = "8 + 2b + 4 + b";
answers[12][2] = "8 + 8b + 2 - b";
answers[12][3] = "8 + 4b + 4 - b";
backgrounds[12] = "assets/background.png"
textColor[12] = "white";
buttonSprite[12] = "assets/button.png";
buttonTextColor[12] = "red";

questions[13] = "Quelle expression est égale à (2 + b)²?";
answers[13] = [];
answers[13][0] = "2² + 4b + b²";
answers[13][1] = "2² + 4b - b²";
answers[13][2] = "2² + b²";
answers[13][3] = "4 + b²";
backgrounds[3] = "assets/background.png"
textColor[13] = "white";
buttonSprite[13] = "assets/button.png";
buttonTextColor[13] = "red";

questions[14] = "Quelle expression est égale à (a - 2)²?";
answers[14] = [];
answers[14][0] = "a² + 4a - 2²";
answers[14][1] = "a² + 2*a*b + 2²";
answers[14][2] = "a² + 2²";
answers[14][3] = "a² - 2*2²";
backgrounds[14] = "assets/background.png"
textColor[14] = "white";
buttonSprite[14] = "assets/button.png";
buttonTextColor[14] = "red";

questions[15] = "Quelle expression est égale à (a + 7)(a - 7)?";
answers[15] = [];
answers[15][0] = "a² - 7²";
answers[15][1] = "a² + 7²";
answers[15][2] = "7² - a²";
answers[15][3] = "a² + 14a - 7²";
backgrounds[15] = "assets/background.png"
textColor[15] = "white";
buttonSprite[15] = "assets/button.png";
buttonTextColor[15] = "red";

questions[16] = "Quelle expression est égale à (a + 2)(b + 7)?";
answers[16] = [];
answers[16][0] = "a*b + a*7 + 2*b + 2*7";
answers[16][1] = "a*b + a*7 + b*a + b*2";
answers[16][2] = "(a*b + a*7) - (a*b + b*7)";
answers[16][3] = "(a*b + a*7) * (a*b + b*7)";
backgrounds[16] = "assets/background.png"
textColor[16] = "white";
buttonSprite[16] = "assets/button.png";
buttonTextColor[16] = "red";

questions[17] = "Quelle expression est égale à (x + y)²?";
answers[17] = [];
answers[17][0] = "x² + 2xy + y²";
answers[17][1] = "x² + 2x² - y²";
answers[17][2] = "x² + y²";
answers[17][3] = "x² + 2xy - y²";
backgrounds[17] = "assets/background.png"
textColor[17] = "white";
buttonSprite[17] = "assets/button.png";
buttonTextColor[17] = "red";

questions[18] = "Quelle expression est égale à (b - a)²?";
answers[18] = [];
answers[18][0] = "b² + 2*ba - a²";
answers[18][1] = "a² + 2*ab - b²";
answers[18][2] = "b² + 2*ba + b²";
answers[18][3] = "a² + 2*ab + b²";
backgrounds[18] = "assets/background.png"
textColor[18] = "white";
buttonSprite[18] = "assets/button.png";
buttonTextColor[18] = "red";

questions[19] = "Quelle expression est égale à (4 - a)(4 + a)?";
answers[19] = [];
answers[19][0] = "16 - a²";
answers[19][1] = "16 - 2*4a + a²";
answers[19][2] = "a² - 16";
answers[19][3] = "a² - 2*4a - 16";
backgrounds[19] = "assets/background.png"
textColor[19] = "white";
buttonSprite[19] = "assets/button.png";
buttonTextColor[19] = "red";

////////////////////////////////////////////////////////////////////////////////
// Ne pas toucher au code à partir de ce point
////////////////////////////////////////////////////////////////////////////////


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
  for (i = 0; i < 10; i++) {
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
