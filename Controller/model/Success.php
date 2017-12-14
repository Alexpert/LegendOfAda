<?php

class Success implements JsonSerializable {
    public integer $id;
    public string $name;
    public string $avatar;
    public string $description;

    public function jsonSerialize() {
        return $this;
    }

}


 ?>
