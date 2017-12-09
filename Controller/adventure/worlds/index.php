<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/*
 * We would need:
 * 	- Player token
 * */

$worlds[0] = "Mongolie";
$worlds[1] = "France";
$worlds[2] = "Italie";
$worlds[3] = "Inde";
$worlds[4] = "Atlantis";
$worlds[5] = "Londres";
$worlds[6] = "Enfer";

echo json_encode($worlds);

?>
