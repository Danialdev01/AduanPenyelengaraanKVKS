<?php
    session_start();
    require_once('../../../db/config.php');

    echo $id_aduan = $_POST['id_aduan'];
    echo $tarikh_tindakan_aduan = $_POST['tarikh_tindakan_aduan'];
    echo $ulasan_aduan = $_POST['ulasan_aduan'];

    $sahkan_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_umum SET tarikh_tindakkan_aduan = '$tarikh_tindakan_aduan', ulasan_aduan = '$ulasan_aduan', status_aduan = '2' WHERE id_aduan = '$id_aduan'");
    $_SESSION['prompt'] = "Aduan Telah Disahkan";
    header("location:../");

?>