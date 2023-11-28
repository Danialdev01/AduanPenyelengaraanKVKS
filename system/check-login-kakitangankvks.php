<?php 
    session_start();

    require_once('../db/config.php');
    
    if(isset($_POST['login'])){
        $_SESSION['idKakitangan'] = $_POST['id_kakitangan'];
        $_SESSION['isLoggedIn'] = 3;
        header("location:../pengguna");
        
    }
    else{
        $_SESSION['prompt'] = "Tidak Masukkan Input";
        header("location:../login.php");
        mysqli_close($connect);
    }

?>