<!DOCTYPE html>
<html>
<?php include_once 'session.php'; ?>
<head>
	<title>Menu</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type-"text/css" href="style.css">
</head>
<body class="campaign">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
		<img src="images/arrow.png" alt=">"></img>
		<a href="campaign.php">Campagne</a>
	</p>
	<a href="login.php"><img class="user" src="images/user.jpg"></img></a>
</header>
<?php Chat('campaign'); ?>
<img src="images/Monde.png"></img>
<menu class="campaign">
	<a>Monde 1</a>
	<a>Monde 2</a>
	<a>Monde 3</a>
	<a>Monde 4</a>
	<a>Monde 5</a>
</menu>
</body>
</html>
