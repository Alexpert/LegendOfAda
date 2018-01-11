<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['game'])) {
	if(isset['guild']) {
		$data = $dao->getScoreGuild($_GET['game'], $_GET['guild']);
	} else {
		$data = $dao->getScoreSolo($_GET['game']);
	}
} else if(isset($_GET['token'])
	and isset($_GET['level'])) {
		$data = $dao->getScoreSoloLevel($_GET['token'], $_GET['level']);
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
