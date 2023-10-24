<?php 
    require_once('../../../db/config.php');

    $id_kakitangan = $_POST['id_kakitangan'];
    $nama_kakitangan = $_POST['nama_kakitangan'];
    $jawatan_kakitangan = $_POST['jawatan_kakitangan'];

    $kemaskini_kakitangan = mysqli_query($connect, "UPDATE kakitangankvks SET nama_kakitangan = '$nama_kakitangan', jawatan_kakitangan = '$jawatan_kakitangan' WHERE id_kakitangan = '$id_kakitangan'");
    header("location:../")

?>