<?php

header('Content-type: application/json');

require_once('../../model/DAO.php');

$response['worlds'] = $dao->getWorlds();

if(isset($_GET['world'])) {
	if(isset($_GET['token'])) {
		if(isset($_GET['guild'])) {
			$response['world'] = $dao->getLevelsFromWorldGuild($_GET['world'], $_GET['guild']);
		} else {
			$response['world'] = $dao->getLevelsFromWorldUser($_GET['world'], $_GET['token']);
		}
	} else {
		$response['world'] = $dao->getLevelsFromWorld($_GET['world']);
	}
}

echo json_encode($response);

?>
