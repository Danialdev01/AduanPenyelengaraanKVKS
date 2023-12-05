<?php
    session_start();
    require_once('../../../db/config.php');

    $id_kakitangan = $_GET['id_kakitangan'];

    $batal = mysqli_query($connect, "UPDATE kakitangankvks SET status_kakitangan = '2' WHERE id_kakitangan = '$id_kakitangan'");
    $_SESSION['prompt'] = "Berjaya Batal Admin";
    header("location:../");

?>