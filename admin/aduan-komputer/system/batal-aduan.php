<?php
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $delete_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_komputer SET status_aduan = '0' WHERE id_aduan = '$id_aduan'");
    header("location:../")

?>