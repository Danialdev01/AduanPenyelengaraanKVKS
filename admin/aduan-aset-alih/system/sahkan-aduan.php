<?php
    session_start();

    require_once('../../../db/config.php');

    echo "id admin :";
    echo $id_admin = $_SESSION['idAdmin'];
    echo "<br>";
    echo $id_aduan = $_POST['id_aduan'];
    echo "<br>";
    echo $kos_penyelengaraan_terdahulu = $_POST['kos_penyelengaraan_terdahulu'];
    echo "<br>";
    echo $kos_penyelengaraan_anggaran = $_POST['kos_penyelengaraan_anggaran'];
    echo "<br>";
    echo $ulasan_aduan = $_POST['ulasan_aduan'];

    $sahkan_aduan = mysqli_query($connect, "UPDATE aduan_kerosakan_penyaman_udara SET kos_penyelengaraan_terdahulu = '$kos_penyelengaraan_terdahulu', kos_penyelengaraan_anggaran = '$kos_penyelengaraan_anggaran', ulasan_aduan = '$ulasan_aduan', id_admin = '$id_admin', status_aduan = '2' WHERE id_aduan = '$id_aduan'");
    $_SESSION['prompt'] = "Aduan Telah Disahkan";
    header("location:../")


?>