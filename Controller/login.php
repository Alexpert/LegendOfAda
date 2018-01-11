<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('model/DAO.php');

if(isset($_POST['username'])
	and isset($_POST['password'])) {
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	$valid = true;

	if(isset($_POST['create'])
		and $_POST['create'] == 'true') {
		$valid = $dao->createUser($username, $password);
		if(!$valid) {
			$data['error'] = 'Impossible de créer l\'utilisateur '.$username;
		}
	}

	if($valid) {
		$data = $dao->login($username, $password);
	}
} else {
	$data['error'] = 'Arguments invalides';
}

echo json_encode($data);

?>
