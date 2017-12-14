<?php

class World implements JsonSerializable {
	public string $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
