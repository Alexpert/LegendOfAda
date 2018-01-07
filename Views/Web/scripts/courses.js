
function specific() {
	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = JSON.parse(request.responseText);
			let content = document.getElementsByTagName('div')[0];

			for(var i = 0; i < response.length; i++) {
				let title = document.createElement('h1');
				let list = document.createElement('ol');

				title.appendChild(document.createTextNode(response[i].name));
				content.appendChild(title);
				content.appendChild(list);

				for(var j = 0; j < response[i].lessons.length; j++) {
					let object = document.createElement('li');
					let link = document.createElement('a');

					object.appendChild(link);
					link.appendChild(document.createTextNode(response[i].lessons[j].name));
					link.setAttribute('href', 'lesson.html?theme=' + response[i].id + '&lesson=' + response[i].lessons[j].id);
					list.appendChild(object);
				}
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/courses/index.php');
	request.send();
}
