<?php
    session_start();
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $delete_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_komputer SET status_aduan = '1' WHERE id_aduan = '$id_aduan'");

    $_SESSION['prompt'] = "Berjaya Diktifkan Semula";

    header("location:../")

?>