<?php
    require_once('../../db/config.php');

    echo $id_pensyarah = $_POST['id_pensyarah'];
    echo "<br>";
    echo $waktu_bengkel_kosong  = $_POST['waktu_bengkel_kosong'];
    echo "<br>";
    echo $id_lokasi  = $_POST['id_lokasi'];
    echo "<br>";
    echo $desc_lokasi 	 = $_POST['desc_lokasi'];
    echo "<br>";
    echo $id_asset = $_POST['id_asset'];
    echo "<br>";
    echo $jenis_kepunyaan_asset  = $_POST['jenis_kepunyaan_asset'];
    echo "<br>";
    echo $nombor_siri_pendaftaran_asset  = $_POST['nombor_siri_pendaftaran_asset'];
    echo "<br>";
    echo $tarikh_Kerosakan  = $_POST['tarikh_Kerosakan'];
    echo "<br>";
    echo $perihal_Kerosakan  = $_POST['perihal_Kerosakan'];

    $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_Kerosakan_komputer VALUES (NULL, '$id_pensyarah', '$waktu_bengkel_kosong', '$id_lokasi', '$desc_lokasi', '$id_asset', '$jenis_kepunyaan_asset', '$nombor_siri_pendaftaran_asset', '$tarikh_Kerosakan', '$perihal_Kerosakan', NULL, NULL, NULL, NULL, '1');");
    echo "thigi";
    header("location:../")

?>