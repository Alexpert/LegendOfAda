
function specific() {
	var request1 = new XMLHttpRequest();
	var request2 = new XMLHttpRequest();
	var theme = 1;
	var lesson = 1;

	if(queryURL.theme != undefined)
		theme = queryURL.theme;

	if(queryURL.lesson != undefined)
		lesson = queryURL.lesson;

	request1.onreadystatechange = function() {
		if(request1.readyState == 4) {
			if (request1.status == 200) {
				var container = document.getElementsByClassName('lesson')[0];
				container.innerHTML = request1.response;
			} else {
				window.location.assign('courses.html');
			}
		}
	}

	request1.open('GET', 'http://api.legendofada.eu/courses/' + theme + '/' + lesson);
	request1.send();

	request2.onreadystatechange = function() {
		if(request2.readyState == 4
			&& request2.status == 200) {
			let response = JSON.parse(request2.responseText);

			for(var i = 0; i < response.length; i++) {
				if(response[i].id == theme) {
					for(var j = 0; j < response.length; j++) {
						if(response[i].lessons[j].id == lesson) {
							let title = response[i].lessons[j].name;
							let header = document.body.getElementsByTagName('header')[0];
							let link = document.createElement('a');

							header.getElementsByTagName('p')[0].appendChild(link);
							link.appendChild(document.createTextNode(title));

							document.title = title;

							return;
						}
					}
				}
			}

			window.location.assign("courses.html");
		}
	}

	request2.open('GET', 'http://api.legendofada.eu/courses/index.php');
	request2.send();
}
