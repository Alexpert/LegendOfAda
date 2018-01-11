<?php

class User implements JsonSerializable {
	public $username;
	public $password;
	public $token;
	public $timeout;
	public $avatar;

	public function jsonSerialize() {
		return $this;
	}
}

?>
