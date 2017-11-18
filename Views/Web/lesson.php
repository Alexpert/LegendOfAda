<?php

if(!(isset($_GET['theme'])
	or isset($_GET['lesson']))) {
	header('Location: courses.php');
} else {
	$theme = intval($_GET['theme']);
	$lesson = intval($_GET['lesson']);
	if($theme == 0
		or $lesson == 0) {
		header('Location: courses.php');
	}

	$file = 'http://api.legendofada.eu/courses/' . $theme . '/' . $lesson;
	$name = 'Nombres premiers et fractions irréductibles';
	$content = file_get_contents($file);
}

?>

<!DOCTYPE html>
<html>
<?php
include_once 'session.php';
Head('Nombres premiers et fractions irréductibles');
?>
<body class="courses">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
		<img src="images/arrow.png" alt=">"></img>
		<a href="courses.php">Leçons</a>
		<img src="images/arrow.png" alt=">"></img>
		<a><?= $name ?></a>
	</p>
	<a href="login.php"><img class="user" src="images/user.jpg"></img></a>
</header>
<div class="lesson">
<?= $content ?>
</div>
</body>
</html>
