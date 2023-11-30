<?php
    session_start();
    require_once('../../../db/config.php');

    $id_pegawai = $_GET['id_pegawai'];

    $batal = mysqli_query($connect, "DELETE FROM pegawai_teknikal WHERE id_pegawai = '$id_pegawai'");
    $_SESSION['prompt'] = "Berjaya Hapuskan";
    header("location:../");

?>