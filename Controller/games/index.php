<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('../model/DAO.php');
/*
 * We would need:
 * 	- Game id (optionnal)
 * */

if(isset($_GET['id'])) {
	$id = $_GET['id'];
	$game = $dao->getGame($id);
	echo json_encode($game);
} else {
	$games = $dao->getGames();
	echo json_encode($games);
}

?>
