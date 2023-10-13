<?php

    require_once('../../../db/config.php');

    echo $id_aduan = $_POST['id_aduan'];
    echo "<br>";
    echo $kos_penyelengaraan_terdahulu = $_POST['kos_penyelengaraan_terdahulu'];
    echo "<br>";
    echo $kos_penyelengaraan_anggaran = $_POST['kos_penyelengaraan_anggaran'];
    echo "<br>";
    echo $ulasan_aduan = $_POST['ulasan_aduan'];

    $sahkan_aduan = mysqli_query($connect, "UPDATE aduan_Kerosakan_komputer SET kos_penyelengaraan_terdahulu = '$kos_penyelengaraan_terdahulu', kos_penyelengaraan_anggaran = '$kos_penyelengaraan_anggaran', ulasan_aduan = '$ulasan_aduan', status_aduan = '2' WHERE id_aduan = '$id_aduan'");
    header("location:../")


?>