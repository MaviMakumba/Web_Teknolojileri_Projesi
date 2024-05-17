<?php
ob_start();
header("Content-Type: text/html; charset=UTF-8");
// Formdan gelen verileri alın
$name = $_POST['name'];
$mail = $_POST['mail'];
$tel = $_POST['tel'];
$message = $_POST['message'];

// Giriş kontrolü ve görüntüleme
echo "<h1>Gönderilen Bilgiler</h1>";
echo "<p><strong>İsim:</strong> $name</p>";
echo "<p><strong>E-Mail:</strong> $mail</p>";
echo "<p><strong>Tel:</strong> $tel</p>";
echo "<p><strong>Mesaj:</strong> $message</p>";

// 5 saniye sonra anasayfaya yönlendirme
header("refresh:5;url=index.html");
?>
