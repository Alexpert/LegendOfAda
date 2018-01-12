
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

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = parseResponse(request.responseText);
			let container = document.getElementById('achievements');

			for(var i = 0; i < response.length; i++) {
				let content = document.createElement('div');
				let preview = document.createElement('img');
				let name = document.createElement('h2');
				let description = document.createElement('p');
				let change = document.createElement('button');
				let id = response[i].id;

				container.appendChild(content);
				content.setAttribute('class', 'achievement');
				content.appendChild(preview);
				content.appendChild(name);
				content.appendChild(description);
				content.appendChild(change);
				preview.setAttribute('src', 'http://api.legendofada.eu/avatar/' + id + '.png');
				name.appendChild(document.createTextNode(response[i].name));
				description.appendChild(document.createTextNode(response[i].description));
				change.appendChild(document.createTextNode('Choisir comme avatar'));
				change.addEventListener('click', function() {
					let requestChange = new XMLHttpRequest();

					requestChange.onreadystatechange = function() {
						if(requestChange.readyState == 4
							&& requestChange.status == 200) {
							let responseChange = parseResponse(requestChange.responseText);

							session.avatar = id;
							setSession(session);

							window.location.reload(false);
						}
					}

					requestChange.open('GET', 'http://api.legendofada.eu/avatar/select.php?token=' + session.token
									+ '&id=' + id);
					requestChange.send();
				});
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/achievements.php?token=' + session.token);
	request.send();
}

