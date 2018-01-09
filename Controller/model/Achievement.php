<?php

class Achievement implements JsonSerializable {
	public $id;
	public $name;
	public $description;

	public function jsonSerialize() {
		return $this;
	}
}

?>
