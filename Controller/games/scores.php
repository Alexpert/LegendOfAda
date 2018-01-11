<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/* We would need:
 * user token
 */

require_once('../model/DAO.php');

if(isset($_GET['game'])
	and isset($_GET['score'])) {
	if(isset($_GET['token'])) {
		if(isset('level')) {
			if(isset($_GET['guild'])) {
				$data = $dao->addScoreGuild($_GET['token'],
								$_GET['value'],
								$_GET['game'],
								$_GET['level'],
								$_GET['guild']);
			} else {
				$data = $dao->addScoreSoloLevel($_GET['token'],
								$_GET['value'],
								$_GET['game'],
								$_GET['level']);
			}
		} else {
			$data = $dao->addScoreSolo($_GET['token'],
							$_GET['value'],
							$_GET['game']);
		}
	}
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
