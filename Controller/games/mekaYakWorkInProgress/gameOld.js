//answers contient toute les réponses à toutes les quesions,
//answers[num de la question][numero de la réponse] = réponse;
//La réponse 0 est la bonne, vous devez enregistrez 4 réponses
var answers = [];

//questions contient toutes les questions,
//questions[numero de la question] = question;
var questions = [];

var background = [];

var questionObj;
var answerObj = [];
var playerAnswer = 0;
var currentQ = 0;

//////////////////////////////////////////////////////////
//Question Exemple
//////////////////////////////////////////////////////////
//Pour la question 0
questions[0] = "A Combien est égal 2 au carré?";
answers[0] = [];

answers[0][0] = 4; //initialisation de la réponse 0 (la bonne)
answers[0][1] = 8;
answers[0][2] = 6;
answers[0][3] = 3;

background[0] = "assets/background.jpg"; //définition du fond pour la question 0



//////////////////////////////////////////////////////////////
//Ne pas Modifier a partir d'ici
/////////////////////////////////////////////////////////////
function Button(content, posX, posY, width, height, correct) {
	answerObj = new GameObject();
	if (i / 2 == 0) {
		answerObj.y = 6 / 8;
	} else {
		answerObj.y = 7 / 8;
	}
	if (i % 2 == 0) {
		answerObj.x = 2 / 11;
	} else {
		answerObj.x = 6 / 11;
	}
	answerObj.width = 3 / 11;
	answerObj.height = 6 / 8;
	answerObj.text = answers[numQ][(goodAnswer + i) % 4];
}

function QuestionObj(numQ) {
	game.setBackground(background[numQ]);

	questionObj = new GameObject();
	questionObj.text = questions[numQ];
	questionObj.x = 0;
	questionObj.y = 0.5;
	questionObj.width = 1;
	questionObj.height = 1/8;

	questionObj.goodAnswer = Math.floor(Math.random() * 4);

	console.log(questionObj);

	for (i = 0; i < 4; i++) {
		answerObj[i] = Button(answers[Math.floor(goodAnswer + i)])
	}
	console.log(answerObj);
}

function setup() {
	//Mélange les questions/réponses/background
	for (i = 0; i < questions.length; i++) {
		var pos = Math.floor(Math.random() * questions.length);
		[questions[i], questions[pos]] = [questions[pos], questions[i]];
		[answers[i], answers[pos]] = [answers[pos], answers[i]];
		[background[i], background[pos]] = [background[pos], background[i]];
	}

	questionObj = new QuestionObj(currentQ);
}

function update() {
	game.draw(questionObj);
	for (i = 0; i < 4; i++) {
		game.draw(answerObj[i]);
	}


}

function clicked(x, y) {
	for (i = 0; i < 4; i++) {
		if (answerObj[i].contains(x,y)) {
			if (i == questionObj.goodAnswer) {
				playerAnswer = 1;
			} else {
				playerAnswer = -1;
			}
		}
	}
}
