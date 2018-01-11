<?php

class Friendship implements JsonSerializable {
	public $user1;
	public $user2;
	public $accepted;

	public function jsonSerialize() {
		return $this;
	}
}

?>
