<?php 
    session_start();

    require_once('../db/config.php');
    
    if(isset($_POST['login'])){
        if($_POST['id_kakitangan'] != 0){
            $_SESSION['idKakitangan'] = $_POST['id_kakitangan'];
            $_SESSION['isLoggedIn'] = 3;
            setcookie("isLoginCookie","3", time() + (86400 * 30), "/");
            setcookie("idKakitanganCookie",$_POST['id_kakitangan'], time() + (86400 * 30), "/");
            header("location:../pengguna");
        }
        else{
            $_SESSION['prompt'] = "Sila Pilih Nama Pengguna";
            header("location:../");
            mysqli_close($connect);
        }
    }
    else{
        $_SESSION['prompt'] = "Tidak Masukkan Input";
        header("location:../");
        mysqli_close($connect);
    }

?>