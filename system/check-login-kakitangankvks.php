<?php 
    session_start();

    require_once('../db/config.php');
    
    if(isset($_POST['login'])){
        if($_POST['id_kakitangan'] != 0){
            $_SESSION['idKakitangan'] = $_POST['id_kakitangan'];
            $_SESSION['isLoggedIn'] = 3;
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