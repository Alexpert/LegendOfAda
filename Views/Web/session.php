<?php

// Empêche les fouineurs de venir
if(strpos($_SERVER['REQUEST_URI'], 'session.php') != false)
	http_response_code(403);

session_start();

if(!isset($_SESSION['token']))
	header('Location: login.php');

function User() {
	echo "\t".'<a href="login.php"><img class="user" src="images/user.png"></img></a>'."\n";
}

function Head($title = null) {
	echo "<head>\n";
	echo '	<title>';
	if($title != null)
		echo $title;
	else
		echo 'Legend of Ada';
	echo "</title>\n";
	echo "	<meta charset=\"UTF-8\">\n";
	echo "	<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">";
	echo "</head>\n";
}

?>
