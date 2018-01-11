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

var defaultBackground = "assets/kurtzgesagt-blueMarble.png"
var defaultTextColor = "red";
var defaultButtonSprite = "assets/button.png";
var defaultButtonTextColor = "blue";

questions[0] = "Que représente une distance de 5cm en mètres quand le coefficient de proportionnalité est de 12/4 ?";
answers[0] = [];
answers[0][0] = "5m";
answers[0][1] = "12m";
answers[0][2] = "3 Mekayaks";
answers[0][3] = "15m";

questions[1] = "Quel est le coefficient de proportionnalité quand la distance sur une carte est de 2cm et la distance réelle de 70m ?";
answers[1] = [];
answers[1][0] = "35";
answers[1][1] = "68";
answers[1][2] = "42";
answers[1][3] = "4";

questions[2] = "Quel est le coefficient de proportionnalité quand la distance sur une carte est de 10cm et la distance réelle de 70m ?";
answers[2] = [];
answers[2][0] = "35";
answers[2][1] = "12";
answers[2][2] = "7";
answers[2][3] = "10";

questions[3] = "Que représente une distance de 10cm en mètres quand le coefficient de proportionnalité est de 7/14 ?";
answers[3] = [];
answers[3][0] = "5m";
answers[3][1] = "12m";
answers[3][2] = "7m";
answers[3][3] = "42m";

questions[4] = "Quel est le coefficient de proportionnalité quand la distance sur une carte est de 12cm et la distance réelle de 48m ?";
answers[4] = [];
answers[4][0] = "12";
answers[4][1] = "4";
answers[4][2] = "35";
answers[4][3] = "12/4";

questions[5] = "Que représente une distance réelle de 50m en centimètres quand le coefficient de proportionnalité est de 10 ?";
answers[5] = [];
answers[5][0] = "5cm";
answers[5][1] = "15cm";
answers[5][2] = "5m";
answers[5][3] = "10cm";

questions[6] = "Que représente une distance réelle de 22m en centimètres quand le coefficient de proportionnalité est de 1/4 ?";
answers[6] = [];
answers[6][0] = "22/4cm";
answers[6][1] = "5cm";
answers[6][2] = "22cm";
answers[6][3] = "88cm";

questions[7] = "Dans un supermarché un paquet d'1 kilo de spaghetti valant 2€ subit une réduction de 20%. Combien coute à présent le kilo de spaghetti ?";
answers[7] = [];
answers[7][0] = "1€";
answers[7][1] = "1.40€";
answers[7][2] = "1.60€";
answers[7][3] = "1.50€";

questions[8] = "Sur 30 personnes 40% ne boivent pas de café. Combien de personnes boivent du café ?";
answers[8] = [];
answers[8][0] = "20";
answers[8][1] = "18";
answers[8][2] = "15";
answers[8][3] = "25";

questions[9] = "Un cappuccino valant 1€20 connait une augmentation de 10%. Combien vaut il maintenant ?";
answers[9] = [];
answers[9][0] = "2€";
answers[9][1] = "1€25";
answers[9][2] = "1€32";
answers[9][3] = "1€30";

questions[10] = "Une pizza qui coutait hier 10€ coute aujourd'hui 12€50. De combien de % son prix à augmenter ?";
answers[10] = [];
answers[10][0] = "25%";
answers[10][1] = "20%";
answers[10][2] = "22%";
answers[10][3] = "12%";


questions[11] = "Un pain au chocolat coute environ 1€. Mais pour Jean-François Copé ils coutent 15 centimes. De combien de % ont-ils subit une réduction ?";
answers[11] = [];
answers[11][0] = "80%";
answers[11][1] = "0%";
answers[11][2] = "85%";
answers[11][3] = "30%";

questions[12] = "Un enfant mange 4 parts d'un gâteau coupé en 12 parts. Combien de % du gâteau a-t-il mangé ?";
answers[12] = [];
answers[12][0] = "33.3333333%";
answers[12][1] = "27.7777777%";
answers[12][2] = "30%";
answers[12][3] = "40%";

questions[13] = "Un jeu a un prix de base de 40€. Lors des soldes il a une réduction de 30%. A quel prix le jeu se vend à présent ?";
answers[13] = [];
answers[13][0] = "42€";
answers[13][1] = "20€";
answers[13][2] = "32€";
answers[13][3] = "28€";

questions[14] = "Quelle est la taille d'une figurine d'une personne d'1m50 à l'échelle 1/2 ?";
answers[14] = [];
answers[14][0] = "75cm";
answers[14][1] = "80cm";
answers[14][2] = "15cm";
answers[14][3] = "35cm";

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
