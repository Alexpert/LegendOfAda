<?php

if(!isset($_GET['world'])) {
	$world = 1;
} else {
	$world = intval($_GET['world']);
	if($world < 0
		or $world > 1) {
		header('Location: index.php');
	}
}

?>
<!DOCTYPE html>
<html>
<?php
include_once 'session.php';
Head('Campagne');
?>
<body class="campaign">
<header>
	<p>
		<a href="index.php">Menu Principal</a>
		<img src="images/arrow.png" alt=">"></img>
		<a href="campaign.php">Campagne</a>
	</p>
	<?php User(); ?>
</header>
<img src="http://api.legendofada.eu/campaign/worlds/<?= $world ?>/map.png" alt="Monde <?= $world ?>" usemap="#map"></img>
<map name="map">
	<area shape="circle" coords="406,282,35" href="game.php?id=1" alt="Eratoaster">
	<area shape="circle" coords="952,226,35" href="" alt="Eratoaster">
	<area shape="circle" coords="1156,491,35" href="" alt="Eratoaster">
	<area shape="circle" coords="975,669,35" href="" alt="Eratoaster">
	<area shape="circle" coords="698,606,35" href="" alt="Eratoaster">
	<area shape="circle" coords="558,468,35" href="" alt="Eratoaster">
</map>
<menu class="campaign">
	<a href="campaign.php?world=1">Monde &#x1F1EB&#x1F1F7</a>
</menu>
</body>
</html>
