<?php
require_once('World.php');
require_once('DAO.php');

class Guild implements JsonSerializable {
	public $id;
	public $name;
	public $description;
	public $standalone;
	public $leaderId;
	public $worldId;

	public function jsonSerialize() {
		return $this;
	}

	public function setWorld(World $world) {
		$this->worldId = $world->id;
		$dao->updateGuild($this);
	}
}

?>
