<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['id'])) {
	$id = $_GET['id'];
	$game = $dao->getGame($id);
	echo json_encode($game);
} else {
	$games = $dao->getGames();
	echo json_encode($games);
}

?>
