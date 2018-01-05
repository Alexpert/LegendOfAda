<?php

class Score implements JsonSerializable {
	public $username;
	public $date;
	public $value;
	public $game;
	public $level;
	public $guild;

	public function jsonSerialize() {
		return $this;
	}
}

?>
