<?php

class Guild implements JsonSerializable {
	public string $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
