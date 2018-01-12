<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['token'])) {
	$achievements = $dao->achieved($_GET['token']);
} else {
	$achievements['error'] = 'Arguments Invalides';
}

echo json_encode($achievements);

?>
