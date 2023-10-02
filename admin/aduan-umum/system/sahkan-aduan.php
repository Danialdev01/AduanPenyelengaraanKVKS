<?php
    require_once('../../../db/config.php');

    $id_aduan = $_POST['id_aduan'];
    $tindakkan_teknikal_aduan = $_POST['tindakkan_teknikal_aduan'];
    $tarikh_tindakkan_aduan = $_POST['tarikh_tindakkan_aduan'];
    $ulasan_aduan = $_POST['ulasan_aduan'];

    $sahkan_aduan = mysqli_query($connect, "UPDATE aduan_kerosakkan_umum SET tindakkan_teknikal_aduan = '$tindakkan_teknikal_aduan', tarikh_tindakkan_aduan = '$tarikh_tindakkan_aduan', ulasan_aduan = '$ulasan_aduan', status_aduan = '2' WHERE id_aduan = '$id_aduan'");
    header("location:../");

?>