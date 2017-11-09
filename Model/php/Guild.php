<?php

class Guild implements JsonSerializable {
	public $id;
	public $name;
	public $description;
	public $standalone;

	public function jsonSerialize() {
		return $this;
	}
}

?>
