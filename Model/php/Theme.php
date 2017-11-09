<?php

class Theme implements JsonSerializable {
	public $id;
	public $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
