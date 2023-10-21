<?php
    require_once('../../db/config.php');

    $nama_pelapor = $_POST['nama_pelapor'];
    $tarikh_aduan = $_POST['tarikh_aduan'];
    $lokasi_terperinci_aduan = $_POST['lokasi_terperinci_aduan'];
    $butiran_kerosakan = $_POST['butiran_kerosakan'];

    $tambah_aduan_kerosakan_umum = mysqli_query($connect, "INSERT INTO aduan_kerosakan_umum VALUES (NULL,'$nama_pelapor','$lokasi_terperinci_aduan','$butiran_kerosakan','$tarikh_aduan', NULL, NULL, NULL, NULL, '1')");
    header("location:../");
?>