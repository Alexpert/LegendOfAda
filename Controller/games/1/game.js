
function toastNumber() {
	return Math.floor(Math.random() * 100);
}

function Eratoaster() {
	var eratoaster = new GameObject();
	eratoaster.x = 0.45;
	eratoaster.y = 0.6;
	eratoaster.velocity.x = -0.1;
	eratoaster.width = 0.1;
	eratoaster.height = 0.25;
	eratoaster.image = game.createImage('assets/eratoaster.png');

	return eratoaster;
}

function Toast() {
	var toast = new GameObject();
	toast.x = 0.35;
	toast.y = 0.5;
	toast.velocity.y = -0.2;
	toast.width = 0.06;
	toast.height = 0.1;
	toast.text = toastNumber();
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
	clock.text = 0;

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

	game.draw(score);
	startDate = Date.now();
}

function update() {
	clock.text = Math.floor((Date.now() - startDate) / 1000);

	if(eratoaster.x <= 0.1 || eratoaster.x >= 0.8)
		eratoaster.velocity.x = -eratoaster.velocity.x

	if(toast.y > 1) {
		game.clear(toast);

		game.fill('black');
		game.clear(score);
		if(toast.primary == undefined)
			score.text -= 1;
		else if(toast.primary == true)
			score.text += 3;
		else
			score.text -= 2;
		game.draw(score);

		toast.x = eratoaster.x;
		toast.y = eratoaster.y - toast.width;
		toast.velocity.y = -toast.velocity.y;
		toast.text = toastNumber();
		toast.primary = undefined;
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
	
	if(clock.text >= 50)
		game.fill('red');
	else
		game.fill('black');
	game.draw(clock);

	if(clock.text == 60)
		game.end(score.text);
}

function clicked(x, y) {
	if(toast.contains(x, y) && toast.primary == undefined) {
		if(toast.text % 2 == 0)
			toast.primary = true;
		else
			toast.primary = false;
	}
}
