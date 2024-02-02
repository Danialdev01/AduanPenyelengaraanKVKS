<?php 
    session_start();
    require_once('../../../db/config.php');

    $id_aduan = $_GET['id_aduan'];

    $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_komputer WHERE id_aduan = $id_aduan");
    $aduan = mysqli_fetch_array($aduan_sql);
    
    if($aduan['nama_img_ref'] != NULL){
        if(!unlink("../../../pengguna/aduan-komputer/system/uploads/" . $aduan['nama_img_ref'])){
            echo "error";
        }
    }

    $delete_aduan_sql = mysqli_query($connect, "DELETE FROM `aduan_kerosakan_komputer` WHERE id_aduan = $id_aduan");

    $_SESSION['prompt'] = "Aduan Berjaya Delete";
    header("location:../");

?>