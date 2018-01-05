<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

if(isset($_POST['username'])
	and isset($_POST['password'])) {
	if(isset($_POST['create'])
		and $_POST['create'] == 'true') {
		$data['created'] = 'success';
	}

	$data['username'] = 'Sandrine';
	$data['avatar'] = 'sandrine.jpg';
	$data['token'] = random_int(0, PHP_INT_MAX);
} else {
	$data['error'] = 'Connexion impossible';
}

echo json_encode($data);

?>
