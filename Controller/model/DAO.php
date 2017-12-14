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

function addUserBD(User $user, boolean $student) {
    try {
        $username = $user->username;
        $name = $user->name;
        $isEtudiant = $student;
        $password = $user->password;

        $this->db->beginTransaction();
        $request =  $this->db->prepare('INSERT INTO USER(username, name,student,password) VALUES (:username, :name,:student,:password);');
        $request->bindParam(':username', $username);
        $request->bindParam(':name', $name);
        $request->bindParam(':student', $isEtudiant);
        $request->bindParam(':password', $password);
        $request->execute();

        if($isEtudiant) {
            $user2 = getUserFromUserName($username);
            $id = $user2->id;

            $request2 = $this->db->prepare('INSERT INTO GUILD(standalone,leaderId) VALUES (true,:leaderId);');
            $request2->bindParam(':leaderId', $id);
            $request2->execute();
        }
        $this->db->commit();
    } catch (PDOException $e) {
        $this->db->rollback();
        echo("Erreur PDO :".$e->getMessage());
    }
}

function getUserFromUserName(string $username) : User {
    try {
        $request = $this->db->prepare('SELECT * FROM USER WHERE username = :username;');
        $pseudo = $username;
        $request->bindParam(':username', $pseudo);
        $request->execute();
        $utilisateur = $request->fetchAll(PDO::FETCH_CLASS, 'User');
        return $utilisateur[0];
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }

}

function getUnfinishedWorldsFromGuild(Guild $guild) : array() {
  try {
      $request = $this->db->prepare('SELECT * FROM WORLD WHERE id NOT IN (SELECT wordlId FROM FINISHED WHERE guildId = :id);');
      $id = $guild->id;
      $request->bindParam(':id', $id);
      $request->execute();

      $worlds = $request->fetchAll(PDO::FETCH_CLASS, 'World');
      return $worlds;
  } catch (PDOException $e) {
      die("Erreur PDO :".$e->getMessage());
  }
}


/*
  function addGame(Game $game, file $file) {

}
*/

function getAllGames() : array() {
    try {
        $request = $this->db->prepare('SELECT * FROM GAME;');
        $request->execute();
        $jeux = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
        return $jeux;
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}

function updateGuild(Guild $guild) {
    try {
        $id = $guild->id;
        $name = $guid->name;
        $description = $guild->description;
        $leaderId = $guild->leaderId;
        $worldId = $guild->worldId;

        $request = $this->db->prepare('UPDATE GUILD SET name = :name AND description = :description AND leaderId = :leaderId AND worldId = :worldId WHERE id = :id;');
        $request->bindParam(':id', $id);
        $request->bindParam(':name', $name);
        $request->bindParam(':description', $description);
        $request->bindParam(':leaderId', $leaderId);
        $request->bindParam(":worldId", $worldId);

        $request->execute();
    } catch(PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}

function getGuildFromLeader(User $leader) : Guild {
    try {
        $id = $leader->id;
        $request = $this->db->prepare('SELECT * FROM GUILD WHERE leaderId = :leader;');
        $request->bindParam(':leader', $id);
        $request->execute();
        $guilde = $request->fetchAll(PDO::FETCH_CLASS, 'User');
        return $guilde[0];
    } catch(PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}
function addFriendship(User $user1, User $user2) {
    try {
        if($user1->id != $user2->id) {
            $idUser1 = $user1->id;
            $idUser2 = $user2->id;
            
            $request = $this->db->prepare('INSERT INTO FRIEND VALUES(:user1,:user2);');
            $request->bindParam(':user1', $idUser1);
            $request->bindParam(':user2', $idUser2);
            $request->execute();
        }
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}

function getFriendshipsFromUser(User $user) : array() {
    try {
        $id = $user->id;
        $username = $user->username;

        $request1 = $this->db->prepare('SELECT * FROM USER WHERE id IN((SELECT id FROM FRIEND WHERE user1Id = :id) UNION (SELECT id FROM FRIEND WHERE user2Id = :id)) AND username != :username;');
        $request1->bindParam(':id',$id);
        $request1->bindParam(':username',$username);
        $request1->execute();
        $utilisateurs = $request1->fetchAll(PDO::FETCH_CLASS, 'User');

        return $utilisateurs;
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }

}

function getStandaloneGuild(User $user) : Guild {
    try {
        $leaderId = $user->id;

        $request = $this->db->prepare('SELECT * FROM GUILD WHERE standalone = true AND leaderId = :leaderId;');
        $request->bindParam(':leaderId', $leaderId);

        $guild = $request->fetchAll(PDO::FETCH_CLASS, 'Guild');
        return $guild[0];
    } catch (PDOException $e) {
        die("Erreur PDO :".$e->getMessage());
    }
}



}

$dao = new DAO();

 ?>
