<!DOCTYPE html>
<html>
<?php
include_once 'session.php';
Head('Jeu');
?>
<body class="game">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
		<img src="images/arrow.png" alt=">"></img>
		<a href="game.php">Mini-jeu</a>
	</p>
	<?php User(); ?>
</header>
<a class="course" href="lesson.php?theme=1&lesson=1">Cours</a>
<rules>
	<h1>Eratoaster</h1>
	<img src="http://api.legendofada.eu/games/1/preview.png"/>
	<p>
		Cliquez sur les toasts premiers pour annihiler Eratoaster l'omnipotent
	</p>
</rules>
<social class="game">
	<h1>Leaderboards</h1>
	<table>
		<tr><td>1</td><td>Bobby</td><td>1345</td></tr>
		<tr><td>2</td><td>Annie</td><td>1227</td></tr>
		<tr><td>3</td><td>Roger</td><td>1134</td></tr>
		<tr><td>4</td><td>Bilel</td><td>1021</td></tr>
		<tr><td>5</td><td>Sandrine</td><td>967</td></tr>
		<tr><td>6</td><td>Gérard</td><td>943</td></tr>
		<tr><td>7</td><td>Antoine</td><td>942</td></tr>
		<tr><td>8</td><td>Alexandre</td><td>938</td></tr>
		<tr><td>9</td><td>Alexis</td><td>936</td></tr>
		<tr><td>10</td><td>Nathaniel</td><td>927</td></tr>
		<tr><td></td><td>...</td><td></td></tr>
	</table>
</social>
<a href="http://api.legendofada.eu/games/1"><footer class="play"><h1>Commencer</h1></footer></a>
</body>
</html>
