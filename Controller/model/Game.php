<?php

class Game implements JsonSerializable {
	public integer $id;
	public string $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
