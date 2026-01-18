<?php
    session_start();
    require_once('../../../db/config.php');

    $id_aset = $_GET['id_aset'];

    $tambah = mysqli_query($connect, "DELETE FROM aset WHERE id_aset = '$id_aset'");
    $_SESSION['prompt'] = "Aset Berjaya Dipadamkan";
    header("location:../");

?>