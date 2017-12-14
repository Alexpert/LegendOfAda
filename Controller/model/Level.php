<?php

class Level implements JsonSerializable {
	public integer $id;

	public function jsonSerialize() {
		return $this;
	}
}

?>
