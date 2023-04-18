<?php
 require_once('config.php');

$type = $_POST['type'];
$url = $_POST['url'];
$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);

$type = trim($type);
$url = trim($url);

$sql = "INSERT INTO videos VALUES(NULL, '$type', '$url')";
$pdo->query($sql);
?>