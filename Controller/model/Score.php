<?php

class Score implements JsonSerializable {
    public integer $id;
    public integer $value;
    public integer $date;

    public Guild $scoredWith;
    public User $scored;
    public Game $scoredOn;
    public Level $isAdventure;

    public function jsonSerialize() {
        return $this;
    }

}
 ?>
