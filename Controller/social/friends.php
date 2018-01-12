<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['token'])
	and isset($_GET['action'])) {
	if(isset($_GET['name'])) {
		switch($_GET['action']) {
		case 'add':
			$data['success'] = $dao->createFriendship($_GET['token'], $_GET['name']);
			break;
		case 'accept':
			$data['success'] = $dao->acceptFriendship($_GET['token'], $_GET['name']);
			break;
		case 'remove':
			$data['success'] = $dao->deleteFriendship($_GET['token'], $_GET['name']);
			break;
		default:
			$data['error'] = 'Action invalide';
			break;
		}
	} else {
		if($_GET['action'] == 'list') {
			$data = $dao->listFriendship($_GET['token']);
		} else {
			$data['error'] = 'Action invalide';
		}
	}
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
