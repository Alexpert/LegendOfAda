<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('../model/DAO.php');

if(isset($_GET['id']) {
  $scores = $dao->getScoreGame($_GET['id']);
  echo json_encode($scores);
}

 ?>
