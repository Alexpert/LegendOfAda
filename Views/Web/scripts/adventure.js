
function specific() {
	let session = getSession();
	var query = '';
	var request = new XMLHttpRequest();

	if(session != undefined) {
		query = '?token='+session.token;
	}

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let worlds = JSON.parse(request.responseText);
			var menu = document.getElementsByTagName('menu')[0];

			for(var i = 0; i < worlds.length; i++) {
				var link = document.createElement('a');

				link.setAttribute('href', 'adventure.html?world=' + i);
				link.appendChild(document.createTextNode(worlds[i]));
				menu.appendChild(link);
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/worlds/index.php'+query);
	request.send();
}
