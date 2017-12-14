<?php

class Theme implements JsonSerializable {
	public integer $id;
	public string $name;

	public function jsonSerialize() {
		return $this;
	}
}

?>
