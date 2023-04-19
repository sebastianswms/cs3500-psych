<?php
 require_once('config.php');

$index = $_GET['index'];

$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
$pdo2 = new PDO(DBCONNSTRING,DBUSER,DBPASS);

$sql = "SELECT UNIQUE(`type`) FROM videos";
$result = $pdo->query($sql);

$categories = array();

while ($row = $result->fetch()) {
    $categories[] = $row[0];
}

foreach ($categories as $value) {

    $sql2 = "SELECT `url` FROM videos WHERE `type`='$value' ORDER BY RAND() LIMIT 1";
    $result2 = $pdo2->query($sql2);

    while ($row = $result2->fetch()) {
        echo '<input type="checkbox" id="db'.$index.'" name="video-entry" value="'.$value.','.$row[0].','.$index.'">';
        echo '<label for="db'.$index.'" style="margin-left: 7px;">'.$value.'</label>';
        echo '<br>';
    }

    $index++;
}

$pdo = null;
?>