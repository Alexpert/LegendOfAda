<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/* We would need:
 * user token
 */

require_once('../model/DAO.php');

if(isset($_GET['token'])) {
	$achievements = $dao->achieved($_GET['token']);
} else {
	$achievements['error'] = 'Arguments Invalides';
}

echo json_encode($achievements);

?>
