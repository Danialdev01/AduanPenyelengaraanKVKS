<?php
    require_once('../../../db/config.php');

    $id_pegawai = $_GET['id_pegawai'];

    $tambah = mysqli_query($connect, "DELETE FROM pengguna WHERE id_pegawai = '$id_pegawai'");
    header("location:../");

?>