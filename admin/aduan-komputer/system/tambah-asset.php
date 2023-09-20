<?php
    require_once('../../../db/config.php');

    $nama_asset = $_POST['nama_asset'];
    $jenis_asset = $_POST['jenis_asset'];

    $tambah_asset = mysqli_query($connect, "INSERT INTO asset VALUES (NULL,'$nama_asset','$jenis_asset','1')");
    header("location:../semua-asset.php")
?>