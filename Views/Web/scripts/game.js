
function specific() {
	if(queryURL.id == undefined) {
		window.location.assign('index.html');
	}

	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = JSON.parse(request.responseText);

			let course = document.getElementById('course');
			course.setAttribute('href', 'lesson.html?lesson=' + response.about);

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
/*
<a id="course" href="lesson.html?theme=1&lesson=1">Cours</a>
<rules>
	<h1>Eratoaster</h1>
	<img src="http://api.legendofada.eu/games/1/preview.png"/>
	<p>
		Cliquez sur les toasts premiers pour annihiler Eratoaster l'omnipotent
	</p>
</rules>
<social class="game">
	<h1>Leaderboards</h1>
	<table>
		<tr><td>1</td><td>Bobby</td><td>1345</td></tr>
		<tr><td>2</td><td>Annie</td><td>1227</td></tr>
		<tr><td>3</td><td>Roger</td><td>1134</td></tr>
		<tr><td>4</td><td>Bilel</td><td>1021</td></tr>
		<tr><td>5</td><td>Sandrine</td><td>967</td></tr>
		<tr><td>6</td><td>Gérard</td><td>943</td></tr>
		<tr><td>7</td><td>Antoine</td><td>942</td></tr>
		<tr><td>8</td><td>Alexandre</td><td>938</td></tr>
		<tr><td>9</td><td>Alexis</td><td>936</td></tr>
		<tr><td>10</td><td>Nathaniel</td><td>927</td></tr>
		<tr><td></td><td>...</td><td></td></tr>
	</table>
</social>
<a href="http://api.legendofada.eu/games/1"><footer id="play"><h1>Commencer</h1></footer></a>
*/

	request.open('GET', 'http://api.legendofada.eu/games/index.php?id=' + queryURL.id);
	request.send();
}

