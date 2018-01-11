<?php

class Guild implements JsonSerializable {
	public $name;
	public $leader;

	public function jsonSerialize() {
		return $this;
	}
}

?>
