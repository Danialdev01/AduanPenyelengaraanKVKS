<?php
    require_once('../../db/config.php');

    $nama_pelapor = $_POST['nama_pelapor'];
    $tarikh_aduan = $_POST['tarikh_aduan'];
    $lokasi_terperinci_aduan = $_POST['lokasi_terperinci_aduan'];
    $butiran_Kerosakan = $_POST['butiran_Kerosakan'];

    $tambah_aduan_Kerosakan_umum = mysqli_query($connect, "INSERT INTO aduan_Kerosakan_umum VALUES (NULL,'$nama_pelapor','$lokasi_terperinci_aduan','$butiran_Kerosakan','$tarikh_aduan', NULL, NULL, NULL, NULL, '1')");
    header("location:../");
?>