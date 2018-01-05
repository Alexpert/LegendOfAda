<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('../../model/DAO.php');

/*
 * We would need:
 * 	- Player token
 * */

$response['worlds'] = $dao->getWorlds();

if(isset($_GET['world'])) {
	$response['world'] = $_GET['world'];
}

echo json_encode($response);

?>
