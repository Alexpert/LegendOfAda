<?php

class Lesson implements JsonSerializable {
	public $id;
	public $name;
	public $themeId;

	public function jsonSerialize() {
		return $this;
	}
}

?>
