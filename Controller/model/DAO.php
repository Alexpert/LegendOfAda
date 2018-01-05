<?php

require_once('Theme.php');
require_once('Lesson.php');
require_once('World.php');

class DAO {
    private $db;

// Ouverture de la base de donnée
function __construct() {
    $dsn = 'pgsql:dbname=legendofada;host=127.0.0.1'; // Data source name
    $user = 'legendofada';
    $password = 'Me4a4ris7o7eBestGirl';	// Le mot de passe peut être en clair, seulement connexions locales

    try {
        $this->db = new PDO($dsn, $user, $password);
    } catch (PDOException $e) {
        exit("Erreur ouverture BD : ".$e->getMessage());
    }
}

// Gestion Users
function addUser(string $username, string $pw) : array {
    try {
	$request = $this->db->prepare('insert into USERS values (:username, :pw)');
	$request->bindParam(':username', $username, PDO::PARAM_STR);
	$request->bindParam(':pw', $pw, PDO::PARAM_STR);
	$request->execute();
	$user = getUser($username, $pw);
    } catch (PDOException $e) {
	$users['error'] = $e->getMessage();
    }

    return $user;
}

function getUser(string $username, string $pw) : array {
    try {
	$request = $this->db->prepare('select * from users where username = :username and password = :pw');
	$request->bindParam(':username', $username);
	$request->bindParam(':pw', $pw);
	$request->execute();
	$user = $request->fetchAll(PDO::FETCH_CLASS, 'User');
    } catch (PDOException $e) {
	$user['error'] = $e->getMessage();
    }

    return $user;
}

function getAllGames() : array {
    try {
	$request = $this->db->prepare('select * from games');
	$request->execute();
	$games = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
    } catch (PDOException $e) {
	$games['error'] = $e->getMessage();
    }

    return $games;
}

function getThemes() : array {
    try {
        $request = $this->db->prepare('select * from themes order by id');
        $request->execute();
        $themes = $request->fetchAll(PDO::FETCH_CLASS, 'Theme');
    } catch (PDOException $e) {
	$themes['error'] = $e->getMessage();
    }

    return $themes;
}

function getLessons($theme) : array {
    try {
        $request = $this->db->prepare('select * from lessons where theme = :theme order by id');
	$request->bindParam(':theme', $theme, PDO::PARAM_INT);
        $request->execute();
        $lessons = $request->fetchAll(PDO::FETCH_CLASS, 'Lesson');
    } catch (PDOException $e) {
	$lessons['error'] = $e->getMessage();
    }

    return $lessons;
}

function getWorlds() : array {
    try {
        $request = $this->db->prepare('select * from worlds');
        $request->execute();
        $worlds = $request->fetchAll(PDO::FETCH_CLASS, 'World');
    } catch (PDOException $e) {
	$worlds['error'] = $e->getMessage();
    }

    return $worlds;
}

function getLevelFromWorld($world) : array {
    try {
	$request = $this->db->prepare('select * from levels where world = :world');
	$request->bindParam(':world', $world, PDO::PARAM_STR);
	$request->execute();
	$levels = $request->fetchAll(PDO::FETCH_CLASS, 'Level');
   } catch (PDOException $e) {
	$levels['error'] = $e->getMessage();
   }

   return $levels;
}

// Gestion Score


$dao = new DAO();

?>
