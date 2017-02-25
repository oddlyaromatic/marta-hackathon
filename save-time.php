<?php

if (isset($_POST["json"])){

  file_put_contents("marta.json", $_POST["json"]);

  echo "did a thing";
}

?>
