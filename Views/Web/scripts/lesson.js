var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

function specific() {
	var request = new XMLHttpRequest();
	var theme = 1;
	var lesson = 1;

	if(urlParams.theme != undefined)
		theme = urlParams.theme;

	if(urlParams.lesson != undefined)
		lesson = urlParams.lesson;

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if (request.status == 200) {
				var container = document.getElementsByClassName("lesson")[0];
				container.innerHTML = request.response;
			} else {
				window.location.assign("courses.html");
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/courses/'+theme+'/'+lesson);
	request.send();
}
