<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/*
 * We would need:
 * 	- Game id (optionnal)
 * */

if(isset($_GET['id'])) {
	$id = $_GET['id'];
	echo json_encode($game);
} else {
	echo json_encode($games);
}

?>
