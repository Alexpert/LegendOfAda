<?php

require_once('Theme.php');
require_once('Lesson.php');
require_once('World.php');
require_once('Level.php');

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
	$request->bindParam(':username', $username, PDO::PARAM_STR);
	$request->bindParam(':pw', $pw, PDO::PARAM_STR);
	$request->execute();
	$user = $request->fetchAll(PDO::FETCH_CLASS, 'User');
    } catch (PDOException $e) {
	$user['error'] = $e->getMessage();
    }

    return $user;
}

function deleteUser(int $token) : bool {
   try {
	$request = $this->db->prepare('delete from users where token = :token');
	$request->bindParam(':token', $token, PDO::PARAM_INT);
	return $request->execute();
   } catch (PDOException $e) {
   }

   return false;
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

function getLevelsFromWorld($world) : array {
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
function addScore(int $token, int $value, int $game, int $level, string $guild) : bool {
   try {
	$request = $this->db->prepare('insert into scores values select username, :value, :game, :level, :guild
								from users
								where token = :token');
	$request->bindParam(':value', $value, PDO::PARAM_INT);
	$request->bindParam(':game', $game, PDO::PARAM_INT);
	$request->bindParam(':level', $level, PDO::PARAM_INT);
	$request->bindParam(':guild', $guild, PDO::PARAM_STR);
	$request->bindParam(':token', $token, PDO::PARAM_INT);
	return $request->execute();
   } catch (PDOException $e) {
   }
   return false;
}

function getScoreGame(int $game) : array {
   try {
	$request = $this->db->prepare('select * from scores where game = :game');
	$request->bindParam(':game', $game);
	$request->execute();
	$scores = $request->fetchAll(PDO::FETCH_CLASS, 'Score');
   } catch (PDOException $e) {
	$scores['error'] = $e->getMessage();
   }

   return $scores;
}

function getScoreGameUser(int $game, int $token) : array {
   try {
	$request = $this->db->prepare('select * from scores where game = :game and username = (select username from users where token = :token');
	$request->bindParam(':game', $game);
	$request->bindParam(':token', $token);
	$request->execute();
	$scores = $request->fetchAll(PDO::FETCH_CLASS, 'Score');
   } catch (PDOException $e) {
	$scores['error'] = $e->getMessage();
   }

   return $scores;
}

function getScoreLevel(int $level) : array {
   try {
	$request = $this->db->prepare('select * from scores where level = :level');
	$request->bindParam(':level', $level);
	$request->execute();
	$scores = $request->fetchAll(PDO::FETCH_CLASS, 'Score');
   } catch (PDOException $e) {
	$scores['error'] = $e->getMessage();
   }

   return $scores;
}

function getScoreLevelUser(int $level, int $token) : array {
   try {
	$request = $this->db->prepare('select * from scores where level = :level and username = (select username from users where token = :token');
	$request->bindParam(':level', $level);
	$request->bindParam(':token', $token);
	$request->execute();
	$scores = $request->fetchAll(PDO::FETCH_CLASS, 'Score');
   } catch (PDOException $e) {
	$scores['error'] = $e->getMessage();
   }

   return $scores;
}

}

$dao = new DAO();

?>
