<?php

class World implements JsonSerializable {
	public $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
