<?php 
    session_start();

    require_once('../db/config.php');
    
    // if catpcha betul
    if(isset($_POST['login'])){
        if($_POST['h_code'] == $_POST['captcha']){
            
            // cari nama user
            echo "nama ";
            echo $nama_pegawaiPost = mysqli_escape_string($connect,$_POST['nama_pegawai']);
            $find_pengguna_sql = mysqli_query($connect, "SELECT * FROM pegawai_teknikal WHERE nama_pegawai = '$nama_pegawaiPost'");
            $find_pengguna = mysqli_fetch_array($find_pengguna_sql);
            echo $nama_pegawai = mysqli_escape_string($connect, $find_pengguna['nama_pegawai']);
    
            // if nama jumpa
            if($nama_pegawai == $nama_pegawaiPost){
    
                // check password
                echo $katalaluan_penggunaPost = mysqli_real_escape_string($connect, $_POST['password']);
                echo "<br> il";
                echo $find_pengguna['password_pegawai'];
    
                // verify password
                $isBetul = password_verify($katalaluan_penggunaPost, $find_pengguna['password_pegawai']);
    
                // if password betul
                if($isBetul == 1){
                    $_SESSION['idAdmin'] = $find_pengguna['id_pegawai'];
                    $_SESSION['isLoggedIn'] = 2;
                    setcookie("isLoginCookie","2", time() + (86400 * 30), "/");
                    setcookie("idAdminCookie", $find_pengguna['id_pegawai'], time() + (86400 * 30), "/");
                    header("location:../admin/");
                }
                else{
                    $_SESSION['prompt'] = "Salah password";
                    header("location:../admin-login.php");
                }
            }
            else{
                $_SESSION['prompt'] = "Pengguna Tidak Boleh Dijumpai";
                header("location:../admin-login.php");
            }
        }
        else{
            $_SESSION['prompt'] = "Captcha tidak sepadan";
            header("location:../admin-login.php");
        }
    }
    else{
        $_SESSION['prompt'] = "Tidak Masukkan Input";
        header("location:../admin-login.php");
    }

    mysqli_close($connect);
?>