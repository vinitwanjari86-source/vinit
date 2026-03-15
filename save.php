<?php
$conn = new mysqli("localhost", "root", "", "my_proposal_db");

$answer = $_POST['answer'];


$sql = "INSERT INTO answers (answer_text) VALUES ('$answer')";
$conn->query($sql);

echo "<h1>Thank You for your answer ❤️</h1>";
echo $answer;
?>



