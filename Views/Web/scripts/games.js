
function specific() {
	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = parseResponse(request.responseText);
			let content = document.getElementById('gamelist');

			for(var i = 0; i < response.length; i++) {
				let figure = document.createElement('figure');
				let link = document.createElement('a');
				let caption = document.createElement('figcaption');
				let preview = document.createElement('img');

				figure.setAttribute('class', 'game');
				link.setAttribute('href', 'game.html?id=' + response[i].id);
				caption.appendChild(document.createTextNode(response[i].name));
				preview.setAttribute('src', 'http://api.legendofada.eu/games/'
							+ response[i].id + '/preview.png');

				content.appendChild(figure);
				figure.appendChild(link);
				link.appendChild(caption);
				link.appendChild(preview);
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/games/index.php');
	request.send();
}

