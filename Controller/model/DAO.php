<?php

require_once('Theme.php');
require_once('Lesson.php');
require_once('World.php');
require_once('Level.php');
require_once('Game.php');
require_once('Achievement.php');
require_once('User.php');
require_once('Friendship.php');

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
function createUser(string $username, string $pw) : bool {
	$request = $this->db->prepare('insert into users values (:username, :pw)');
	$request->bindParam(':username', $username, PDO::PARAM_STR);
	$request->bindParam(':pw', $pw, PDO::PARAM_STR);
	return $request->execute();
}

function login(string $username, string $pw) {
    try {
	$request = $this->db->prepare('insert into connected values (:username, :pw)');
	$request->bindParam(':username', $username, PDO::PARAM_STR);
	$request->bindParam(':pw', $pw, PDO::PARAM_STR);
	$request->execute();

	$request = $this->db->prepare('select * from connected where username = :username and password = :pw');
	$request->bindParam(':username', $username, PDO::PARAM_STR);
	$request->bindParam(':pw', $pw, PDO::PARAM_STR);
	$request->execute();
	$users = $request->fetchAll(PDO::FETCH_CLASS, 'User');
	if($users) {
		$user = $users[0];
		unset($user->password);
	} else {
		$user['error'] = 'Identifiants invalides';
	}
    } catch (PDOException $e) {
	$user['error'] = $e->getMessage();
    }

    return $user;
}

function achieved($token) : array {
    try {
	$request = $this->db->prepare('select a.* from achievements a, achieved d where username = (select username from connected where token = :token) and a.id = d.achievement');
	$request->bindParam(':token', $token, PDO::PARAM_INT);
	$request->execute();
	$achievements = $request->fetchAll(PDO::FETCH_CLASS, 'Achievement');
    } catch (PDOException $e) {
	$achievements['error'] = $e->getMessage();
    }

    return $achievements;
}

function deleteUser(int $token) : bool {
   try {
	$request = $this->db->prepare('delete from users where token = :token and timeout > now()');
	$request->bindParam(':token', $token, PDO::PARAM_INT);
	return $request->execute();
   } catch (PDOException $e) {
   }

   return false;
}

// Gestion Games
function getGame($id) {
    try {
	$request = $this->db->prepare('select g.*, l.theme from games g, lessons l where g.id = :id and g.about = l.id');
	$request->bindParam(':id', $id, PDO::PARAM_INT);
	$request->execute();
	$game = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
    } catch (PDOException $e) {
	$game['error'] = $e->getMessage();
    }

    return $game[0];
}

function getGames() : array {
    try {
	$request = $this->db->prepare('select * from games');
	$request->execute();
	$games = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
    } catch (PDOException $e) {
	$games['error'] = $e->getMessage();
    }

    return $games;
}

// Gestion Cours et themes
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

	
// Gestion Worlds
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

// Gestion ami
function createFriendship(int $token, string $friend) : bool {
	try {
		$request = $this->db->prepare('insert into friends (user1, user2) select username, :friend from connected where token = :token');
		$request->bindParam(':friend', $friend, PDO::PARAM_STR);
		$request->bindParam(':token', $token, PDO::PARAM_INT);
		return $request->execute();
	} catch (PDOException $e) {
		return false;
	}
}
	
function deleteFriendship(int $token, string $friend) : bool {
	try {
		$request = $this->db->prepare('delete from friends where (user1 = (select username from connected where token = :token) and user2 = :friend)
																	or (user2 = (select username from connected where token = :token) and user1 = :friend)');
		$request->bindParam(':friend', $friend, PDO::PARAM_STR);
		$request->bindParam(':token', $token, PDO::PARAM_INT);
		return $request->execute();
	} catch (PDOException $e) {
		return false;
	}
}
	
function acceptFriendship(int $token, string $friend) : bool {
	try {
		$request = $this->db->prepare('update friends set accepted = TRUE where (user1 = (select username from connected where token = :token) and user2 = :friend)
																	or (user2 = (select username from connected where token = :token) and user1 = :friend)');
		$request->bindParam(':friend', $friend, PDO::PARAM_STR);
		$request->bindParam(':token', $token, PDO::PARAM_INT);
		return $request->execute();
	} catch (PDOException $e) {
	}
	return false;
}

function listFriendship(int $token) : array {
	try {
		$request = $this->db->prepare('select * from friends where user1 = (select username from connected where token = :token) or user2 = (select username from connected where token = :token)');
		$request->bindParam(':token', $token, PDO::PARAM_INT);
		$request->execute();
		$friendship = $request->fetchAll(PDO::FETCH_CLASS, 'Friendship');
	} catch (PDOException $e) {
		$friendship['error'] = $e->getMessage();
	}

	return $friendship;
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
	$request = $this->db->prepare('select * from scores where game = :game and username = (select username from connected where token = :token limit 1)');
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
