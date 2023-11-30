<?php 
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        $id_kakitangan = $_POST['id_kakitangan'];
        $nama_kakitangan = mysqli_escape_string($connect,$_POST['nama_kakitangan']);
        $jawatan_kakitangan = $_POST['jawatan_kakitangan'];
    
        $kemaskini_kakitangan = mysqli_query($connect, "UPDATE kakitangankvks SET nama_kakitangan = '$nama_kakitangan', jawatan_kakitangan = '$jawatan_kakitangan' WHERE id_kakitangan = '$id_kakitangan'");
        $_SESSION['prompt'] = "Berjaya Kemaskini Kakitangan";
        header("location:../");
    }
    else{
        $_SESSION['prompt'] = "Gagal Kemaskini Kakitangan";
        header("location:../");
    }

?>