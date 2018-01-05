<?php

class Lesson implements JsonSerializable {
	public $id;
	public $name;
	public $about;

	public function jsonSerialize() {
		return $this;
	}
}

?>
