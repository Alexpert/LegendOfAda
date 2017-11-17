<!DOCTYPE html>
<html>
<?php include_once 'session.php'; ?>
<head>
	<title>Menu</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body class="index">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
	</p>
	<a href="login.php"><img class="user" src="images/user.jpg"></img></a>
</header>
<menu class="index">
	<h1>Menu</h1>
	<p>
		<a href="campaign.php">Campagne</a>
		<a href="games.php">Mini-jeux</a>
		<a href="courses.php">Cours</a>
	</p>
</menu>
<?php Chat('index'); ?>
<social class="index">
	<h1>Social</h1>
</social>
<footer class="scroller">
	<figure>
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure>
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure>
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure>
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure>
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
</footer>
</body>
</html>
