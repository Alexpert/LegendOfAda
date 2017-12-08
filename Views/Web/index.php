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
	<?php User(); ?>
</header>
<menu class="index">
	<h1>Menu</h1>
	<p>
		<a href="campaign.php">Campagne</a>
		<a href="games.php">Mini-jeux</a>
		<a href="courses.php">Cours</a>
	</p>
</menu>
<scroller>
	<div>
		<h1>Tendances</h1>
		<div>
<?php for($i = 0; $i < 10; $i++) { ?>
			<figure class="game">
				<a href="game.php?id=1">
					<figcaption>Eratoaster</figcaption>
					<img src="http://api.legendofada.eu/games/1/preview.png"/>
				</a>
			</figure>
<?php } ?>
		</div>
	</div>
</scroller>
<social class="index">
	<h1>Social</h1>
</social>
</body>
</html>
