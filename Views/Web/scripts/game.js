
function specific() {
	if(queryURL.id == undefined) {
		window.location.assign('index.html');
	}

	let request = new XMLHttpRequest();

	console.log(queryURL);
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				let response = parseResponse(request.responseText);
				let course = document.getElementById('course');
				let rules = document.getElementsByTagName('rules')[0];
				let title = document.createElement('h1');
				let preview = document.createElement('img');
				let description = document.createElement('p');
				let footer = document.getElementById('play');
				let session = getSession();
				var reqQuery = '';

				if(session != undefined) {
					reqQuery += '?token=' + session.token;
					if(queryURL.level != undefined) {
						reqQuery += '&level=' + queryURL.level;
						if(session.guild != undefined) {
							reqQuery += '&guild=' + session.guild;
						}
					}
				}

				document.title = response.name;
				course.setAttribute('href', 'lesson.html?theme='
					+ response.theme + '&lesson=' + response.about);
				rules.appendChild(title);
				rules.appendChild(preview);
				rules.appendChild(description);
				title.appendChild(document.createTextNode(response.name));
				preview.setAttribute('src', 'http://api.legendofada.eu/games/'
					+ response.id + '/preview.png');
				description.appendChild(document.createTextNode(response.description));
				footer.addEventListener('click', function() {
					window.location.assign('http://api.legendofada.eu/games/' + response.id + '/index.html' + reqQuery);
				});
			} else {
				window.location.assign('index.html');
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/games/index.php?id=' + queryURL.id);
	request.send();
}

