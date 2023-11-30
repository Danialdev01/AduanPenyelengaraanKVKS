<?php 
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        $id_aset = $_POST['id_aset'];
        $nama_aset = $_POST['nama_aset'];
        $jenis_aset = $_POST['jenis_aset'];

        $tambah_aset = mysqli_query($connect, "UPDATE aset SET nama_aset = '$nama_aset', jenis_aset = '$jenis_aset' WHERE id_aset = '$id_aset'");

        $_SESSION['prompt'] = "Berjaya Kemaskini Aset";
        header("location:../");
    }
    else{
        $_SESSION['prompt'] = "Gagal Kemaskini Aset";
        header("location:../");
    }

?>