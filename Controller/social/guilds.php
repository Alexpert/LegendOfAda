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
	switch($_GET['action']) {
	case 'add':
		$data['success'] = true;
		break;
	case 'join':
		$data['success'] = true;
		break;
	case 'remove':
		$data['success'] = true;
		break;
	case 'list':
		$data = ['pain', 'death', 'despair'];
		break;
	default:
		$data['error'] = 'Action invalide';
		break;
	}
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
