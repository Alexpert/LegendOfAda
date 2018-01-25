
function actionGuild(action) {
	let session = getSession();
	let name = document.getElementById('guildname');
	let request = new XMLHttpRequest();

	if(name.value == '')
		return;

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = parseResponse(request.responseText);
			if(response.success == true) {
				name.value = '';
				window.location.reload(false);
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/social/guilds.php?action='
		+ action + '&token=' + session.token + '&name=' + name.value);
	request.send();
}

function addFriend() {
	let session = getSession();
	let name = document.getElementById('friendname');
	let requestAdd = new XMLHttpRequest();

	if(name.value == '')
		return;

	requestAdd.onreadystatechange = function() {
		if(requestAdd.readyState == 4
			&& requestAdd.status == 200) {
			let responseAdd = parseResponse(requestAdd.responseText);
			if(responseAdd.success == true) {
				name.value = '';
				window.location.reload(false);
			}
		}
	}

	requestAdd.open('GET', 'http://api.legendofada.eu/social/friends.php?action=add&token='
	                + session.token + '&name=' + name.value);
	requestAdd.send();
}

function specific() {
	let session = getSession();

	if(session != undefined) {
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

						for(var i = 0; i < response.length; i++) {
							let friendRow = document.createElement('tr');
							let friendName = document.createElement('td');
							let friendRelation = document.createElement('td');
							let friendRemove = document.createElement('td');
							let removeButton = document.createElement('button');
							var name;

							if(response[i].user1 == session.username) {
								name = response[i].user2;
							} else {
								name = response[i].user1;
							}

							friendName.appendChild(document.createTextNode(name));

							if(response[i].accepted == true) {
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
												window.location.reload(false);
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

			if(guilds != undefined) {
				let requestGuilds = new XMLHttpRequest();
				if(session.guild != undefined) {
					let form = guilds.getElementsByClassName('request')[0];
					let clearCurrent = document.createElement('button');
					clearCurrent.appendChild(document.createTextNode(
						'Se déconnecter de la Guilde courante (' + session.guild + ')'));
					clearCurrent.addEventListener('click', function() {
						session.guild = undefined;
						setSession(session);
						window.location.reload(false);
					});
					form.insertBefore(clearCurrent, form.childNodes[0]);
				}

				requestGuilds.onreadystatechange = function() {
					if(requestGuilds.readyState == 4
						&& requestGuilds.status == 200) {
						let response = parseResponse(requestGuilds.responseText);
						let container = guilds.getElementsByTagName('table')[0];

						for(var i = 0; i < response.length; i++) {
							if(response[i].belongs != 0) {
								let guildRow = document.createElement('tr');
								let guildName = document.createElement('td');
								let guildLeader = document.createElement('td');
								let guildCurrent = document.createElement('td');
								let guildLeave = document.createElement('td');
								let leaveButton = document.createElement('button');
								let currentButton = document.createElement('button');
								let name = response[i].name;

								guildName.appendChild(document.createTextNode(name));
								guildLeader.appendChild(document.createTextNode(response[i].leader));
								currentButton.appendChild(document.createTextNode('Courante'));
								currentButton.addEventListener('click', function() {
									session.guild = name;
									setSession(session);
									window.location.reload(false);
								});
								guildCurrent.appendChild(currentButton);
								leaveButton.appendChild(document.createTextNode('X'));
								leaveButton.addEventListener('click', function() {
									let requestLeave = new XMLHttpRequest();
		
									requestLeave.onreadystatechange = function() {
										if(requestLeave.readyState == 4
											&& requestLeave.status == 200) {
											let responseLeave = parseResponse(requestLeave.responseText);
											if(responseLeave.success == true) {
												window.location.reload(false);
											}
										}
									}
									requestLeave.open('GET', 'http://api.legendofada.eu/social/guilds.php?action=leave&token='
										+ session.token + '&name=' + name);
									requestLeave.send();
								});
								guildLeave.appendChild(leaveButton);

								container.appendChild(guildRow);
								guildRow.appendChild(guildName);
								guildRow.appendChild(guildLeader);
								guildRow.appendChild(guildCurrent);
								guildRow.appendChild(guildLeave);
							}
						}
					}
				}

				requestGuilds.open('GET', 'http://api.legendofada.eu/social/guilds.php?action=list&token=' + session.token);
				requestGuilds.send();
			}
		}
	}
}
