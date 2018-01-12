
function specific() {
	if(queryURL.id == undefined) {
		window.location.assign('index.html');
	}

	let request = new XMLHttpRequest();
	let session = getSession();
	var reqQuery = '';

	if(session != undefined) {
		let requestBoard = new XMLHttpRequest();
		var boardURL = 'http://api.legendofada.eu/games/boards.php';

		reqQuery += '?token=' + session.token;
		if(queryURL.level != undefined) {
			reqQuery += '&level=' + queryURL.level;
			boardURL += '?token=' + session.token + '&level=' + queryURL.level;
			if(session.guild != undefined) {
				reqQuery += '&guild=' + session.guild;
			}
		} else {
			boardURL += '?game=' + queryURL.id;
			if(session.guild != undefined) {
				boardURL += '&guild=' + session.guild;
			}
		}

		requestBoard.onreadystatechange = function() {
			if(requestBoard.readyState == 4
				&& requestBoard.status == 200) {
				let response = parseResponse(requestBoard.responseText);
				let board = document.getElementsByTagName('social')[0];
				let container = board.getElementsByTagName('table')[0];
				board.style.visibility = 'visible';

				for(var i = 0; i < response.length; i++) {
					let row = document.createElement('tr');
					let rank = document.createElement('td');
					let name = document.createElement('td');
					let score = document.createElement('td');

					rank.appendChild(document.createTextNode(i + 1));
					name.appendChild(document.createTextNode(response[i].username));
					score.appendChild(document.createTextNode(response[i].value));

					container.appendChild(row);
					row.appendChild(rank);
					row.appendChild(name);
					row.appendChild(score);
				}
			}
		}

		requestBoard.open('GET', boardURL);
		requestBoard.send();
	}

	let endQuery = reqQuery; // Les fonctions ne semblent pas aimer les vars...

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
					window.location.assign('http://api.legendofada.eu/games/' + response.id + '/index.html' + endQuery);
				});
			} else {
				window.location.assign('index.html');
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/games/index.php?id=' + queryURL.id);
	request.send();
}

