<?php
    require_once('../../../db/config.php');
    session_start();

    if(isset($_POST['submit'])){

        $nama_kakitangan = mysqli_escape_string($connect, $_POST['nama_kakitangan']);
        $jawatan_kakitangan = $_POST['jawatan_kakitangan'];
    
        $tambah_kakitangan = mysqli_query($connect, "INSERT INTO kakitangankvks VALUES (NULL,'$nama_kakitangan','$jawatan_kakitangan','1')");
        header("location:../");
        $_SESSION['prompt'] = "Berjaya Tambah Kakitangan";
    }
    else{
        $_SESSION['prompt'] = "Gagal Tambah Kakitangan";
        header("location:../");

    }

?>