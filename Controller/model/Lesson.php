<?php

class Lesson implements JsonSerializable {
	public $id;
	public $name;
	public $theme;

	public function jsonSerialize() {
		return $this;
	}
}

?>
