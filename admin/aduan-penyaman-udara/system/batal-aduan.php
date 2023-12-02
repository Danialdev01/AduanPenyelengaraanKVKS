<?php
    session_start();
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $delete_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_penyaman_udara SET status_aduan = '0' WHERE id_aduan = '$id_aduan'");

    $_SESSION['prompt'] = "Aduan Berjaya Dibatalkan";
    header("location:../")

?>