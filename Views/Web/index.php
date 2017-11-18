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
<?php for($i = 0; $i < 5; $i++) { ?>
	<figure class="game">
		<a href="game.php?id=1">
			<figcaption>Eratoaster</figcaption>
			<img src="http://api.legendofada.eu/games/1/preview.png"/>
		</a>
	</figure>
<?php } ?>
</footer>
</body>
</html>
