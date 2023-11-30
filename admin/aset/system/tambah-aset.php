<?php
    session_start();
    require_once('../../../db/config.php');

    $nama_aset = $_POST['nama_aset'];
    $jenis_aset = $_POST['jenis_aset'];

    $tambah_aset = mysqli_query($connect, "INSERT INTO aset VALUES (NULL,'$nama_aset','$jenis_aset','1')");
    $_SESSION['prompt'] = "Berjaya Tambah Aset";
    header("location:../")
?>