<?php

class User implements JsonSerializable {
	public $username;

	public function jsonSerialize() {
		return [
				'username' => $this->username,
			];
	}
}

?>
