<?php

header('Content-type: application/json');

require_once('../model/DAO.php');

$courses = $dao->getThemes();

foreach($courses as $index => &$course) {
	$course->lessons = $dao->getLessons($course->id);
}

echo json_encode($courses);

?>

