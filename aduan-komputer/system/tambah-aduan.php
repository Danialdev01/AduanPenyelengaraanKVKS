<?php
    session_start();
    require_once('../../db/config.php');

    if(isset($_POST['submit'])){
        echo $id_kakitangankvks = $_POST['id_kakitangan'];
        echo "<br>";
        echo $waktu_bengkel_kosong  = $_POST['waktu_bengkel_kosong'];
        echo "<br>";
        echo $id_lokasi  = $_POST['id_lokasi'];
        echo "<br>";
        echo $desc_lokasi 	 = $_POST['desc_lokasi'];
        echo "<br>";
        echo $id_aset = $_POST['id_aset'];
        echo "<br>";
        echo $jenis_kepunyaan_aset  = $_POST['jenis_kepunyaan_aset'];
        echo "<br>";
        echo $nombor_siri_pendaftaran_aset  = $_POST['nombor_siri_pendaftaran_aset'];
        echo "<br>";
        echo $tarikh_kerosakan  = $_POST['tarikh_kerosakan'];
        echo "<br>";
        echo $perihal_kerosakan  = $_POST['perihal_kerosakan'];
    
        $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_kerosakan_komputer VALUES (NULL, '$id_kakitangankvks', '$waktu_bengkel_kosong', '$id_lokasi', '$desc_lokasi', '$id_aset', '$jenis_kepunyaan_aset', '$nombor_siri_pendaftaran_aset', '$tarikh_kerosakan', '$perihal_kerosakan', NULL, NULL, NULL, NULL, '1');");
        echo "thigi";
        $_SESSION['prompt'] = "Berjaya";
        header("location:../");
    }
    else{
        header("location:../");
    }

?>