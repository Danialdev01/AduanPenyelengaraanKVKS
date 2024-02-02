<?php 
    session_start();
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $delete_aduan_sql = mysqli_query($connect, "DELETE FROM `aduan_kerosakan_komputer` WHERE id_aduan = $id_aduan");

    $_SESSION['prompt'] = "Aduan Berjaya Delete";
    header("location:../");

?>