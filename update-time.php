<?php

$readyTime = date('H:i',strtotime("06:55"));

if (isset($_POST["time"])) {

$newETA = date('H:i',strtotime($_POST["time"]));

$json = file_get_contents("marta.json");

echo $json;

}

?>
