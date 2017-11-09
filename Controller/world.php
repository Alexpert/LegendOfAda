<?php

require_once 'Model/php/World.php';

session_start();

if($id = $_GET['world']
	and is_int($id)) {
	
} else {
	$_SESSION['error'] = 'Erreur chargement du monde';
}

echo json_encode($_SESSION), "\n";
unset($_SESSION['error']);

?>
