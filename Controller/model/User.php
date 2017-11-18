<?php

class User implements JsonSerializable {
	public $id;
	public $username;
	public $name;
	public $student;
	public $password;

	public function jsonSerialize() {
		return [
				'id' => $this->id,
				'username' => $this->username,
				'name' => $this->name,
				'student' => $this->student
			];
	}
}

?>
