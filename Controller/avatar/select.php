<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['token'])
	and isset($_GET['id'])) {
	$data['success'] = $dao->selectAvatar($_GET['token'], $_GET['id']);
} else {
	$data['error'] = 'Arguments Invalides';
}

echo json_encode($data);

?>
