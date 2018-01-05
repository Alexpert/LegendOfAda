<?php

class Level implements JsonSerializable {
	public $id;
	public $world;
	public $game;
	public $x;
	public $y;
	public $previous;

	public function jsonSerialize() {
		return $this;
	}
}

?>
