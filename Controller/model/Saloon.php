<?php

class Saloon implements JsonSerializable {
	public $id;

	public function jsonSerialize() {
		return $this;
	}
}

?>
