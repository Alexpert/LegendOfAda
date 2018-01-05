
function specific() {
	let session = getSession();
	var username = document.getElementById('username');
	var avatar = document.getElementById('avatar');

	if(session == undefined) {
		window.location.assign("login.html");
	}

	username.innerHTML = session.username;
	avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/' + session.avatar);
}

