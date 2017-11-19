
function Eratoaster() {
	var eratoaster = new GameObject();
	eratoaster.x = 0.45;
	eratoaster.y = 0.38;
	eratoaster.velocity.x = -0.1;
	eratoaster.width = 0.1;
	eratoaster.height = 0.25;
	eratoaster.text = "OBEY";
	eratoaster.image = game.createImage('assets/eratoaster.png');

	return eratoaster;
}

var eratoaster;
var toast;

function setup() {
	game.setBackground('assets/background.png');

	toastImg = game.createImage('assets/toast.png');

	game.fill('rgba(255,0,0,1)');
	eratoaster = Eratoaster();

}

function update() {
	game.update(eratoaster);
}

function clicked(x, y) {
	if(eratoaster.contains(x, y))
		alert('Eratoasted');

	game.end(0);
}
