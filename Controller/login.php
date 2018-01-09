<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

if(isset($_POST['username'])
	and isset($_POST['password'])) {
	if(isset($_POST['create'])
		and $_POST['create'] == 'true') {
		// Méthode du dao pour créer un utilisateur
		$data['created'] = 'success';
	}

	$data['username'] = 'Sandrine';
	$data['avatar'] = 1;
	$data['token'] = random_int(0, PHP_INT_MAX);
	/*
	 * $user = (méthode du dao pour se logger)
	 *
	 * if($user->token == 0) {
	 * 	$data['error'] = 'Connexion impossible';
	 * } else {
	 * 	$data['username'] = $user->username;
	 * 	$data['avatar'] = 'sandrine.jpg';
	 * 	$data['token'] = $user->token;
	 * }
	 */
} else {
	$data['error'] = 'Arguments invalides';
}

echo json_encode($data);

?>
