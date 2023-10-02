<?php
    require_once('../../db/config.php');

    $nama_pelapor = $_POST['nama_pelapor'];
    $tarikh_aduan = $_POST['tarikh_aduan'];
    $lokasi_terperinci_aduan = $_POST['lokasi_terperinci_aduan'];
    $butiran_kerosakkan = $_POST['butiran_kerosakkan'];

    $tambah_aduan_kerosakkan_umum = mysqli_query($connect, "INSERT INTO aduan_kerosakkan_umum VALUES (NULL,'$nama_pelapor','$lokasi_terperinci_aduan','$butiran_kerosakkan','$tarikh_aduan', NULL, NULL, NULL, NULL, '1')");
    header("location:../");
?>