<?php
    class User implements JsonSerializable {
	public $username;
	public $password;

	public function jsonSerialize() {
		return $this;
	}
    }
?>
