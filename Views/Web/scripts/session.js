
var queryURL;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    queryURL = {};
    while (match = search.exec(query))
       queryURL[decode(match[1])] = decode(match[2]);
})();

function getSession() {
	return JSON.parse(localStorage.getItem('session'));
}

function setSession(session) {
	localStorage.setItem('session', JSON.stringify(session));
}

function parseResponse(raw) {
	let response = JSON.parse(raw);
	console.log(response);
	if(response.error != undefined) {
		window.location.assign('login.html');
	}
	return response;
}

function wake() {
	let session = getSession();
	var user = document.getElementById('user');
	var link = document.createElement('a');
	var text = 'Connexion';
	var avatar = document.createElement('img');

	if(session == undefined) {
		link.setAttribute('href', 'login.html');
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/1.png');
	} else {
		link.setAttribute('href', 'profile.html');
		text = session.username + '  ';
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/' + session.avatar + '.png');

		let socials = document.getElementsByTagName('social');

		for(var i = 0; i < socials.length; i++) {
			socials[i].style.visibility = 'visible';
		}
	}

	link.appendChild(document.createTextNode(text));
	link.appendChild(avatar);

	user.appendChild(link);

	if(typeof specific == 'function')
		specific();
}
