<?php

class Game implements JsonSerializable {
	public $id;
	public $name;
	public $description;
	public $rule;
	public $worldId;

	public function jsonSerialize() {
		return $this;
	}

	function startGame() : boolean {
		//TODO
	}
}

?>
