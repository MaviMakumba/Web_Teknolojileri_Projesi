<?php
ob_start();
header("Content-Type: text/html; charset=UTF-8");

// Formdan gelen kullanıcı adı ve şifreyi alın
$username = $_POST['username'];
$password = $_POST['password'];

// Belirlediğiniz sabit kullanıcı adı ve şifre
$correct_username = "b231210065";
$correct_password = "iremeren";

// Giriş kontrolü
if ($username === $correct_username && $password === $correct_password) {
    // Giriş başarılı
    echo "<h1>Hoşgeldiniz, $username!</h1>";
    echo "<p>Giriş başarılı. Siteye Yönlendiriliyorsunuz...</p>";
    // 10 saniye sonra anasayfaya yönlendirme
    header("refresh:5;url=index.html");
} else {
    // Giriş başarısız
    echo "<h1>Hatalı Giriş</h1>";
    echo "<p>Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyiniz. Siteye yönlendiriliyorsunuz...</p>";
    // 10 saniye sonra anasayfaya yönlendirme
    header("refresh:5;url=index.html");
}
?>
