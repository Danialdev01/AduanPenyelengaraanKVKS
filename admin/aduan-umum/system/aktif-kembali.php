<?php
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $delete_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_umum SET status_aduan = '1' WHERE id_aduan = '$id_aduan'");
    header("location:../")

?>