<?php

require_once('User.php');
require_once('Game.php');
require_once('World.php');

class DAO {
    private $db;

// Ouverture de la base de donnée
function __construct() {
    $dsn = 'pgsql:../db/database.db'; // Data source name
    try {
        $this->db = new PDO($dsn);
    } catch (PDOException $e) {
        exit("Erreur ouverture BD : ".$e->getMessage());
    }
}

function addUser(User $user, string $password) {
    try {
        $username = $user->username;

        $request =  $this->db->prepare('INSERT INTO USERS VALUES (:username, :password);');
        $request->bindParam(':username', $username);
        $request->bindParam(':password', $password);
        $request->execute();
    } catch (PDOException $e) {
        echo("Erreur PDO :".$e->getMessage());
    }
}

function getUser(string $username) : User {
    try {
        $request = $this->db->prepare('SELECT * FROM USERS WHERE username = :username;');
        $request->bindParam(':username', $username);
        $request->execute();
        $utilisateur = $request->fetchAll(PDO::FETCH_CLASS, 'User');
        return $utilisateur[0];
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }

}
/*
  function addGame(Game $game, file $file) {

}
*/

function getGames() : array() {
    try {
        $request = $this->db->prepare('SELECT * FROM GAME;');
        $request->execute();
        $jeux = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
        return $jeux;
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}

function getGuilds(User $leader) : array() {
    try {
        $username = $leader->username;
        $request = $this->db->prepare('SELECT * FROM GUILD WHERE leaderId = :leader;');
        $request->bindParam(':leader', $username);
        $request->execute();
        $guilde = $request->fetchAll(PDO::FETCH_CLASS, 'User');
        return $guilde[0];
    } catch(PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}
function addFriendship(User $user1, User $user2) {
    try {
        if($user1->username != $user2->username) {
            $nameUser1 = $user1->username;
            $nameUser2 = $user2->username;

            $request = $this->db->prepare('INSERT INTO FRIEND VALUES(:user1,:user2);');
            $request->bindParam(':user1', $nameUser1);
            $request->bindParam(':user2', $nameUser2);
            $request->execute();
        }
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}

function getFriendships(User $user, bool $accepted) : array(User) {
    try {
        $username = $user->username;

        $request1 = $this->db->prepare('SELECT * FROM USER WHERE username IN(SELECT username FROM FRIEND WHERE ((user1 = :username) OR (user2 = :username)) AND username != :username AND accepted = :accepted);');
        $request1->bindParam(':username',$username);
        $request1->bindParam(':accepted',$accepted);
        $request1->execute();
        $utilisateurs = $request1->fetchAll(PDO::FETCH_CLASS, 'User');

        return $utilisateurs;
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }

}





}

$dao = new DAO();

 ?>
