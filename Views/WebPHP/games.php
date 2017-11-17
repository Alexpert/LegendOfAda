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
	<a href="login.php"><img class="user" src="images/user.jpg"></img></a>
</header>
<menu>
<?php for($i = 0; $i < 10; $i++) { ?><figure class="game">
		<a href="game.php">
			<figcaption>Un mini jeu</figcaption>
			<img src="images/minigame.png"/>
		</a>
	</figure><?php } ?>
</menu>
</body>
</html>
