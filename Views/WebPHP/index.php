<!DOCTYPE html>
<html>
<?php
include_once 'session.php';
Head('Menu');
?>
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
<footer class="index">
	<figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
	<figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"></img>
		</a>
	</figure>
</footer>
</body>
</html>
