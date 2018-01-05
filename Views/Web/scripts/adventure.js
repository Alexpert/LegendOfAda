
function specific() {
	let session = getSession();
	var request = new XMLHttpRequest();
	var query = '';
	var world = 'Mongolie';

	if(queryURL.world != undefined) {
		world = queryURL.world;
	}

	if(session != undefined) {
		query = '?token=' + session.token
			+ '&world=' + world;
	} else {
		query = '?world=' + world;
	}

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = JSON.parse(request.responseText);
			let menu = document.getElementsByTagName('menu')[0];
			let map = document.getElementsByTagName('map')[0];

			for(var i = 0; i < response.worlds.length; i++) {
				let link = document.createElement('a');

				link.setAttribute('href', 'adventure.html?world=' + response.worlds[i].name);
				link.appendChild(document.createTextNode(response.worlds[i].name));
				menu.appendChild(link);
			}

			for(var i = 0; i < response.world.length; i++) {
				let area = document.createElement('area');

				area.setAttribute('shape', 'circle');
				area.setAttribute('coords', response.world[i].x
							+ ',' + response.world[i].y
							+ ',35');
				area.setAttribute('href', 'game.html?id=' + response.world[i].id);
				area.setAttribute('alt', world);

				map.appendChild(area);
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/worlds/index.php' + query);
	request.send();

	let areaOnClick = function(event) {
		event.preventDefault();

		console.log(event.target.href);
		console.log(window.location);

		if(event.target.href == window.location) {
			alert('Clicked');
		} else {
			window.location.assign(event.target.href);
		}
	}

	var areas = document.getElementsByTagName('area');

	for(var i = 0; i < areas.length; i++) {
		var area = areas[i];
		area.addEventListener('click', areaOnClick);
	}

	var worldmap = document.getElementById('worldmap');

	worldmap.setAttribute('src', 'http://api.legendofada.eu/adventure/worlds/' + world + '.png');
}

