<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/* We would need:
 * user token
 */

require_once('../model/DAO.php');

if(isset($_GET['token'])
	and isset($_GET['action'])) {
	if(isset($_GET['name'])
		and $_GET['name'] != '') {
		switch($_GET['action']) {
		case 'add':
			$data['success'] = $dao->createGuild($_GET['token'], $_GET['name']);
			break;
		case 'join':
			$data['success'] = $dao->joinGuild($_GET['token'], $_GET['name']);
			break;
		case 'leave':
			$data['success'] = $dao->leaveGuild($_GET['token'], $_GET['name']);
			break;
		default:
			$data['error'] = 'Action invalide';
			break;
		}
	} else {
		if($_GET['action'] == 'list') {
			$data = $dao->listGuild($_GET['token']);
		} else {
			$data['error'] = 'Action invalide';
		}
	}
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
