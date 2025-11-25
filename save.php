<?php
$conn = new mysqli("localhost", "root", "", "your_database");

$answer = $_POST['answer'];

$sql = "INSERT INTO answers (answer_text) VALUES ('$answer')";
$conn->query($sql);

echo "<h1>Thank You for your answer ❤️</h1>";
?>



