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
      $request =  $this->db->prepare('INSERT INTO USER(username, name,student,password) VALUES (:username, :name,:student,:password);');

      $username = $user->username;
      $name = $user->name;
      $isEtudiant = $student;
      $password = $user->password;

      $request->bindParam(':username', $username);
      $request->bindParam(':name', $name);
      $request->bindParam(':student', $isEtudiant);
      $request->bindParam(':password', $password); //Sera probablement modifié

      $request->execute();
    } catch (PDOException $e) {
      die("Erreur PDO :".$e->getMessage());
    }
  }

  function getUserFromUserName(string $username) : User {
    try {
      $request = $this->db->prepare('SELECT * FROM USER WHERE username = :username;');
      $pseudo = $username;
      $request->bindParam(':username', $pseudo);
      $request->execute();
    } catch (PDOException $e) {
      die("Erreur PDO :".$e->getMessage());
    }
    $utilisateur = $request->fetchAll(PDO::FETCH_CLASS, 'User');
    return $utilisateur[0];
  }
  /*
  function getUnfinishedWorldFromGuild(Guild $guild) : array() {

  }
 */
 get

/*
  function addGame(Game $game, file $file) {

}
*/

  function getAllGames() : array() {
    try {
      $request = $this->db->prepare('SELECT * FROM GAME;');
      $request->execute();
    } catch (PDOException $e) {
      die("Erreur PDO :".$e->getMessage());
    }
    $jeux = $request->fetchAll(PDO::FETCH_CLASS, 'Game');
    return $jeux;
  }

  /*
    function updateGuild(Guild $guild) {

  }
  */

  function getGuildFromLeader(User $leader) : Guild {
    try {
      $request2 = $this->db->prepare('SELECT * FROM USER WHERE username = :username;');
      $username = $leader->username;
      $request2->bindParam(':username', $username);
      $request2->execute();
      $user = $request->fetchAll(PDO::FETCH_OBJ);
      $id = $user->id;

      $request = $this->db->prepare('SELECT * FROM GUILD WHERE leaderId = :leader;');
      $request->bindParam(':leader', $id);
      $request->execute();
      $guilde = $request->fetchAll(PDO::FETCH_CLASS, 'User');
      return $guilde[0];

    } catch(PDOException $e) {
      die("Erreur PDO :".$e->getMessage());
    }
  }

}

 ?>
