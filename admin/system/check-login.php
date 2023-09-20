<?php 
    session_start();

    require_once('../../db/config.php');
    
    // if catpcha betul
    if($_POST['h_code'] == $_POST['captcha']){
        
        // cari nama user
        echo "nama ";
        echo $nama_penggunaPost = $_POST['nama_pengguna'];
        $find_pengguna_sql = mysqli_query($connect, "SELECT * FROM pengguna WHERE nama_pengguna = '$nama_penggunaPost'");
        $find_pengguna = mysqli_fetch_array($find_pengguna_sql);
        echo $nama_pengguna = $find_pengguna['nama_pengguna'];

        // if nama jumpa
        if($nama_pengguna == $nama_penggunaPost){

            // check password
            echo $katalaluan_penggunaPost = mysqli_real_escape_string($connect, $_POST['password']);
            echo "<br> il";
            echo $find_pengguna['password_pengguna'];

            // verify password
            $isBetul = password_verify($katalaluan_penggunaPost, $find_pengguna['password_pengguna']);

            // if password betul
            if($isBetul == 1){
                $_SESSION['isAdmin'] = $id_admin;
                $_SESSION['isLoggedIn'] = 2;
                header("location:../");
            }
            else{
                $_SESSION['error'] = "Salah password" . $isBetul;
                echo "thng";
                header("location:../../");
            }
        }
        else{
            $_SESSION['error'] = "Pengguna Tidak Boleh Dijumpai";
            header("location:../../");
        }
    }
    else{
        $_SESSION['error'] = "Captcha tidak sepadan";
        header("location:../../");
    }

?>