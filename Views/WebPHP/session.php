<?php

session_start();

if(!isset($_SESSION['token']))
	header('Location: login.php');

function Chat($class = null) {
	if($class != null)
		echo '<chat class="' . $class . "\">\n";
	else
		echo "<chat>\n";

	echo "	<h1>Chat</h1>\n";
	echo "	<textarea readonly></textarea>\n";
	echo "	<input></input>\n";
	echo "</chat>\n";
}

?>
