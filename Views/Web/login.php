<!DOCTYPE html>
<html>
<?php
session_start();

if(isset($_SESSION['token']))
	unset($_SESSION['token']);

if(isset($_POST['username'])
	and isset($_POST['password'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];

	$_SESSION['token'] = 1;
	header('Location: index.php');
}

?>
<head>
	<title>Login</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body class="login">
	<form action="login.php" method="post">
		<h3>Connexion</h3>
		<input type="text" name="username" maxlength="15" placeholder="Login" required><br>
		<input type="password" name="password"  maxlength="80" placeholder="Mot de passe" required><br>
		<input type="submit" value="Log in">
	</form>
<?php
	if(isset($data['message'])) {
		echo "\t<div class=\"message\"><h2>";
		print($data['message']);
		echo "</h2></div>\n";
	}
?>
	<form action="login.php" method="post">
		<h3>Pas de compte?</h3>
		<input type="text" name="username" maxlength="15" placeholder="Login" required><br>
		<input type="password" name="password" maxlength="80" placeholder="Mot de passe" required><br>
		<input type="checkbox" name="student" checked required>Êtes vous un étudiant?</input><br>
		<input type="submit" value="Créer">
		<input style="display:none" type="checkbox" name="new" checked><br>
	</form>
</body>
</html>
