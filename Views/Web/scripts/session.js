
var queryURL;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    queryURL = {};
    while (match = search.exec(query))
       queryURL[decode(match[1])] = decode(match[2]);
})();

function getSession() {
	return JSON.parse(localStorage.getItem('session'));
}

function setSession(session) {
	localStorage.setItem('session', JSON.stringify(session));
}

function parseResponse(raw) {
	let response = JSON.parse(raw);
	console.log(response);
	if(response.error != undefined) {
		window.location.assign('login.html');
	}
	return response;
}

function wake() {
	let session = getSession();
	var user = document.getElementById('user');
	var link = document.createElement('a');
	var text = 'Connexion';
	var avatar = document.createElement('img');

	if(session == undefined) {
		link.setAttribute('href', 'login.html');
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/1.png');
	} else {
		link.setAttribute('href', 'profile.html');
		text = session.username + '  ';
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/' + session.avatar + '.png');
/*
		let socials = document.getElementsByTagName('social');

		for(var i = 0; i < socials.length; i++) {
			socials[i].style.visibility = 'visible';
			let friends = socials[i].getElementsByClassName('friends')[0];
			let guilds = socials[i].getElementsByClassName('guilds')[0];

			if(friends != undefined) {
				let requestFriends = new XMLHttpRequest();

				requestFriends.onreadystatechange = function() {
					if(requestFriends.readyState == 4
						&& requestFriends.status == 200) {
						let response = parseResponse(requestFriends.responseText);
						let container = friends.getElementsByTagName('table')[0];

						for(var friendI = 0; friendI < response.length; friendI++) {
							let friendRow = document.createElement('tr');
							let friendName = document.createElement('td');
							let friendRelation = document.createElement('td');
							let friendRemove = document.createElement('td');
							let removeButton = document.createElement('button');
							var name;

							console.log(response[friendI]);
							if(response[friendI].user1 == session.username) {
								name = response[friendI].user2;
							} else {
								name = response[friendI].user1;
							}

							friendName.appendChild(document.createTextNode(name));

							if(response[friendI].accepted == true) {
								friendRelation.appendChild(document.createTextNode('Ami'));
							} else {
								let acceptButton = document.createElement('button');

                						acceptButton.appendChild(document.createTextNode('En attente'));
								acceptButton.addEventListener('click', function() {
									let requestAccept = new XMLHttpRequest();
		
                							requestAccept.onreadystatechange = function() {
										if(requestAccept.readyState == 4
											&& requestAccept.status == 200) {
											let responseAccept = parseResponse(requestAccept.responseText);
											if(responseAccept.success == true) {
												friendRelation.removeChild(acceptButton);
												friendRelation.appendChild(document.createTextNode('Ami'));
											}
										}
									}
									requestAccept.open('GET', 'http://api.legendofada.eu/social/friends.php?action=accept&token='
										+ session.token + '&name=' + name);
									requestAccept.send();
								});

								friendRelation.appendChild(acceptButton);
							}

							removeButton.appendChild(document.createTextNode('X'));
							removeButton.addEventListener('click', function() {
								let requestRemove = new XMLHttpRequest();

								requestRemove.onreadystatechange = function() {
									if(requestRemove.readyState == 4
										&& requestRemove.status == 200) {
										let responseRemove = parseResponse(requestRemove.responseText);
										if(responseRemove.success == true) {
											container.removeChild(friendRow);
										}
									}
								}
								requestRemove.open('GET', 'http://api.legendofada.eu/social/friends.php?action=remove&token='
									+ session.token + '&name=' + name);
								requestRemove.send();
							});

							container.appendChild(friendRow);
							friendRow.appendChild(friendName);
							friendRow.appendChild(friendRelation);
							friendRow.appendChild(removeButton);
						}
					}
				}

				requestFriends.open('GET', 'http://api.legendofada.eu/social/friends.php?action=list&token=' + session.token);
				requestFriends.send();
			}
		}
		*/
	}

	link.appendChild(document.createTextNode(text));
	link.appendChild(avatar);

	user.appendChild(link);

	if(typeof specific == 'function')
		specific();
}
