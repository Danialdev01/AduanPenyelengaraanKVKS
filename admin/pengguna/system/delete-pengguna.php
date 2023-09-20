<?php
    require_once('../../../db/config.php');

    $id_pengguna = $_GET['id_pengguna'];

    $tambah = mysqli_query($connect, "DELETE FROM pengguna WHERE id_pengguna = '$id_pengguna'");
    header("location:../");

?>