
function getSession() {
	return JSON.parse(localStorage.getItem('session'));
}

function setSession(session) {
	localStorage.setItem('session', JSON.stringify(session));
}

function wake() {
	let session = getSession();
	var user = document.getElementById('user');
	var link = document.createElement('a');
	var text = 'Connexion';
	var avatar = document.createElement('img');

	if(session == undefined) {
		link.setAttribute('href', 'login.html');
		avatar.setAttribute('src', 'images/logo.png');
	} else {
		link.setAttribute('href', 'login.html');
		text = session.username + '  ';
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/sandrine.jpg');
	}

	link.appendChild(document.createTextNode(text));
	link.appendChild(avatar);

	user.appendChild(link);

	if(typeof specific == 'function')
		specific();
}
