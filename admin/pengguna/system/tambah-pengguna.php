<?php
    require_once('../../../db/config.php');
    session_start();

    echo $nama_pegawai = $_POST['nama_pegawai'];
    echo $password_pegawaiPost = mysqli_real_escape_string($connect, $_POST['password']);
    echo $password_pegawai_confirmPost = mysqli_real_escape_string($connect, $_POST['password_confirm']);

    if($password_pegawaiPost == $password_pegawai_confirmPost){

        $password_pegawai = password_hash($password_pegawaiPost, PASSWORD_DEFAULT);

        $tambah_admin = mysqli_query($connect, "INSERT INTO pengguna VALUES (NULL,'$nama_pegawai','$password_pegawai','1')");
        header("location:../");
    }
    else{
        $_SESSION['error'] = "Gagal tambah pengguna";
    }

?>