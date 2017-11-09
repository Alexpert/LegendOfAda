<?php

class Lesson implements JsonSerializable {
	public $id;
	public $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
