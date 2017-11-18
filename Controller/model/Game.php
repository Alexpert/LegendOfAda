<?php

class Game implements JsonSerializable {
	public $id;
	public $name;
	public $description;

	public function jsonSerialize() {
		return $this;
	}
}

?>
