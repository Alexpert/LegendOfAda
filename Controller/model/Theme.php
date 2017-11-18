<?php

class Theme implements JsonSerializable {
	public $id;
	public $name;
	public $worldId;

	public function jsonSerialize() {
		return $this;
	}
}

?>
