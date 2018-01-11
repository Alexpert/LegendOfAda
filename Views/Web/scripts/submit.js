
function specific() {
	let session = getSession();

	if(session == undefined) {
		window.location.assign("login.html");
	}
}
