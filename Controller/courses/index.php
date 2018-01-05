<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

require_once('../model/DAO.php');
/*
 * We would need:
 * nothing
 * */
$courses = $dao->getThemes();

foreach($courses as $index => &$course) {
	$course->lessons = $dao->getLessons($course->id);
}

echo json_encode($courses);

?>

