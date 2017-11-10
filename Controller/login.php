<?php

require_once 'Model/php/User.php';

session_start();
header('Content-type: application/json');

$_POST['username'] = 'Billy';
$_POST['password'] = 'Bobby';
$_POST['student'] = '1';

if(isset($_POST['username'])
	and isset($_POST['password'])
	and isset($_POST['student'])) {
	$user = new User();

	$user->username = $_POST['username'];
	$user->password = $_POST['password'];
	$user->student = $_POST['student'];

	$_SESSION['user'] = $user;
} else {
	$_SESSION['error'] = 'Login Impossible';
}

echo json_encode($_SESSION), "\n";
unset($_SESSION['error']);

?>
