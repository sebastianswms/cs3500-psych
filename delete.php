<?php
 require_once('config.php');

$type = $_POST['type'];
$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);

$type = trim($type);

$sql = "DELETE FROM videos WHERE `type`='$type'";
$pdo->query($sql);
?>