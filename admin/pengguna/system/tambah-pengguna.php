<?php
    require_once('../../../db/config.php');
    session_start();

    echo $nama_pengguna = $_POST['nama_pengguna'];
    echo $password_penggunaPost = mysqli_real_escape_string($connect, $_POST['password']);
    echo $password_pengguna_confirmPost = mysqli_real_escape_string($connect, $_POST['password_confirm']);

    if($password_penggunaPost == $password_pengguna_confirmPost){

        $password_pengguna = password_hash($password_penggunaPost, PASSWORD_DEFAULT);

        $tambah_admin = mysqli_query($connect, "INSERT INTO pengguna VALUES (NULL,'$nama_pengguna','$password_pengguna','1')");
        header("location:../");
    }
    else{
        $_SESSION['error'] = "Gagal tambah pengguna";
    }

?>