<?php

class World implements JsonSerializable {
	public $id;
	public $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
