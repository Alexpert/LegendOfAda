<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('model/DAO.php');

if(isset($_POST['username'])
	and isset($_POST['password'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];

	if(isset($_POST['create'])
		and $_POST['create'] == 'true') {
		// Méthode du dao pour créer un utilisateur
		$data['created'] = 'success';
	} else {
		$data = $dao->login($username, $password);
	}
/*
	$data['username'] = 'Sandrine';
	$data['avatar'] = 1;
	$data['token'] = random_int(0, PHP_INT_MAX);
 */

} else {
	$data['error'] = 'Arguments invalides';
}

echo json_encode($data);

?>
