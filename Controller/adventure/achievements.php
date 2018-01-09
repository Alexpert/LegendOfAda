<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

/* We would need:
 * user token
 */

require_once('../model/DAO.php');

$achievements = $dao->getAchievements();

echo json_encode($achievements);

?>
