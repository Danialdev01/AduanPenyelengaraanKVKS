<?php
    require_once('../../../db/config.php');
    session_start();

    if(isset($_POST['submit'])){

        echo $nama_pegawai = mysqli_escape_string($connect, $_POST['nama_pegawai']);
        $jawatan_pegawai = $_POST['jawatan_pegawai'];
        echo $password_pegawaiPost = mysqli_real_escape_string($connect, $_POST['password']);
        echo $password_pegawai_confirmPost = mysqli_real_escape_string($connect, $_POST['password_confirm']);
    
        if($password_pegawaiPost == $password_pegawai_confirmPost){
    
            $password_pegawai = password_hash($password_pegawaiPost, PASSWORD_DEFAULT);
    
            $tambah_pegawai = mysqli_query($connect, "INSERT INTO pegawai_teknikal VALUES (NULL,'$nama_pegawai','$password_pegawai','$jawatan_pegawai','1')");
            $_SESSION['prompt'] = "Berjaya Tambah Admin";
            header("location:../");
        }
        else{
            $_SESSION['prompt'] = "Gagal Tambah Admin";
            header("location:../");
        }
    }
    else{
        header("location:../");
    }

?>