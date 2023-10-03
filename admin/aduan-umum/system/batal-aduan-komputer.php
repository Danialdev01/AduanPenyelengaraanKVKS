<?php
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $batal_aduan = mysqli_query($connect, "UPDATE aduan_kerosakkan_komputer SET status_aduan = '0' WHERE id_aduan = '$id_aduan'");

?>