<?php

if(isset($_POST['username'])
	and isset($_POST['password'])
	and isset($_POST['student'])) {
	$data['username'] = $_POST['username'];
	$data['password'] = $_POST['password'];
	$data['token'] = 0;

} else {
	$data['error'] = 'Login impossible';
}

echo json_encode($data), "\n";

?>
