<?php
    require_once('../../db/config.php');
    session_start();
    session_destroy();
    mysqli_close($connect);
    setcookie('isLoginCookie', 2, time() - 3600 , "/");
    setcookie('idKakitanganCookie', 2, time() - 3600 , "/");
    header("location:../../");
?>