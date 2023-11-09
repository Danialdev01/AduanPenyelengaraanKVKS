<?php 
    session_start();

    require_once('../db/config.php');
    
    // if catpcha betul
    if(isset($_POST['login'])){
        if($_POST['h_code'] == $_POST['captcha']){
            
            // cari ic user
            echo $ic_kakitanganPost = mysqli_escape_string($connect, $_POST['ic_kakitangan']);
            $find_kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE ic_kakitangan = '$ic_kakitanganPost'");
            $find_kakitangan = mysqli_fetch_array($find_kakitangan_sql);
            echo $ic_kakitangan = $find_kakitangan['ic_kakitangan'];
    
            // if ic jumpa
            if($ic_kakitangan == $ic_kakitanganPost){
    
                $_SESSION['icKakitangan'] = $ic_kakitangan;
                $_SESSION['isLoggedIn'] = 3;
                header("location:../pengguna");
            }
            else{
                $_SESSION['prompt'] = "Pengguna Tidak Boleh Dijumpai";
                header("location:../");
            }
        }
        else{
            $_SESSION['prompt'] = "Captcha tidak sepadan";
            header("location:../");
        }
    }
    else{
        $_SESSION['prompt'] = "Tidak Masukkan Input";
        header("location:../admin-login.php");
    }

    mysqli_close($connect);
?>