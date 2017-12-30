

let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function isPrime(n) {
	for(i = 0; i < primeNumbers.length; i++) {
		if(n == primeNumbers[i])
			return true;
	}

	return false;
}

function toastNumber() {
	return Math.floor(Math.random() * 99) + 1;
}

function Eratoaster() {
	var eratoaster = new GameObject();
	eratoaster.x = 0.45;
	eratoaster.y = 0.6;
	eratoaster.velocity.x = -0.1;
	eratoaster.width = 0.1;
	eratoaster.height = 0.25;
	eratoaster.image = game.createImage('assets/eratoaster.png');
	eratoaster.resetToast = function(toast) {
		toast.x = this.x;
		toast.y = this.y - toast.width;
		toast.velocity.y = -0.3;
		toast.text = toastNumber();
		toast.primary = undefined;
	}

	return eratoaster;
}

function Toast() {
	var toast = new GameObject();
	toast.width = 0.06;
	toast.height = 0.1;
	toast.image = game.createImage('assets/toast.png');

	return toast;
}

function Score() {
	var score = new GameObject();
	score.x = 0.05;
	score.y = 0.05;
	score.width = 0.1;
	score.height = 0.15;
	score.text = 0;

	return score;
}

function Clock() {
	var clock = new GameObject();
	clock.x = 0.45;
	clock.y = 0.05;
	clock.width = 0.1;
	clock.height = 0.15;

	return clock;
}

var startDate;
var eratoaster;
var toast;
var score;
var clock;

function setup() {
	game.setBackground('assets/background.jpg');

	eratoaster = Eratoaster();
	toast = Toast();
	score = Score();
	clock = Clock();

	eratoaster.resetToast(toast);
	game.draw(score);
	startDate = Date.now();
}

function update() {
	clock.text = 30 - Math.floor((Date.now() - startDate) / 1000);

	if(eratoaster.x <= 0.1 || eratoaster.x >= 0.8)
		eratoaster.velocity.x = -eratoaster.velocity.x

	if(toast.y > 1) {
		game.clear(toast);

		game.fill('black');
		game.clear(score);
		if(toast.primary != undefined) {
			if(toast.primary)
				score.text += 3;
			else
				score.text -= 3;
		} else if(isPrime(toast.text)) {
			score.text -= 1;
		}
		game.draw(score);

		eratoaster.resetToast(toast);
	} else if(toast.y <= 0.2) {
		toast.velocity.y = -toast.velocity.y;
	}

	game.clear(eratoaster);
	game.clear(toast);
	game.clear(clock);

	game.move(eratoaster);
	game.move(toast);

	game.draw(eratoaster);

	if(toast.primary == undefined)
		game.fill('black');
	else if(toast.primary == true)
		game.fill('green');
	else
		game.fill('red');
	game.setFontSize(0.05);
	game.draw(toast);
	game.setFontSize(0.1);
	
	if(clock.text <= 10)
		game.fill('red');
	else
		game.fill('black');
	game.draw(clock);

	if(clock.text == 0) {
		var finalScore = score.text;
		game.clearAll();
		score.x = 0.25;
		score.width = 0.5;

		if(score.text <= 0) {
			score.y = 0.4;
			game.fill('white');
			game.setBackground('preview.png');
			score.text = "VOUS AVEZ PERDU";
		} else {
			score.y = 0.3;
			game.fill('black');
			score.text = "VOUS AVEZ GAGNÉ";
		}

		game.draw(score);

		game.end(finalScore);
	}
}

function clicked(x, y) {
	if(toast.contains(x, y) && toast.primary == undefined) {
		if(isPrime(toast.text))
			toast.primary = true;
		else
			toast.primary = false;
	}
}
