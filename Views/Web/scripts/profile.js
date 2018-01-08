
function specific() {
	let session = getSession();
	let request = new XMLHttpRequest();
	let username = document.getElementById('username');
	let avatar = document.getElementById('avatar');

	if(session == undefined) {
		window.location.assign("login.html");
	}

	username.innerHTML = session.username;
	avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/' + session.avatar + '.png');
	/*
		<div class="achievement">
			<img src="http://api.legendofada.eu/avatar/sandrine.jpg"></img>
			<h2>Sandrine</h2>
			<p>Sandrinisez</p>
		</div>
	*/

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = JSON.parse(request.responseText);
			let container = document.getElementById('achievements');

			for(var i = 0; i < response.length; i++) {
				let content = document.createElement('div');
				let preview = document.createElement('img');
				let name = document.createElement('h2');
				let description = document.createElement('p');

				container.appendChild(content);
				content.setAttribute('class', 'achievement');
				content.appendChild(preview);
				content.appendChild(name);
				content.appendChild(description);
				preview.setAttribute('src', 'http://api.legendofada.eu/avatar/' + response[i].id + '.png');
				name.appendChild(document.createTextNode(response[i].name));
				description.appendChild(document.createTextNode(response[i].description));
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/achievements.php');
	request.send();
}

