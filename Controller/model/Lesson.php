<?php

class Lesson implements JsonSerializable {
	public integer $id;
	public string $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
