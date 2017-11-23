<!DOCTYPE html>
<html>
<?php
include_once 'session.php';
Head('Jeux');
?>
<body class="games">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
		<img src="images/arrow.png" alt=">"></img>
		<a href="games.php">Mini-jeux</a>
	</p>
	<?php User(); ?>
</header>
<menu>
<?php for($i = 0; $i < 10; $i++) { ?><figure class="game">
		<a href="game.php?id=1">
			<figcaption>Eratoaster</figcaption>
			<img src="http://api.legendofada.eu/games/1/preview.png"/>
		</a>
	</figure><?php } ?>
</menu>
</body>
</html>
