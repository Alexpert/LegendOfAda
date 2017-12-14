<?php

class User implements JsonSerializable {
	public string $username;

	public function jsonSerialize() {
		return [
				'username' => $this->username,
			];
	}
}

?>
