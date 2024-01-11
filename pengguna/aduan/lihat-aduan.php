<?php $title = "Lihat Aduan"; $location_index = ".../.."; include('../../components/head.php')?>
<?php 
    require_once('../../db/config.php');
    $id_aduan = $_GET['id_aduan'];
    $jenis_aduan = $_GET['jenis'];

?>
<body>
    <?php $location_index = "../.."; include('../../components/header.php') ?>
    
    <div class="main-container p-2">
        <br>
        <?php
            if($jenis_aduan == "kerosakan_komputer"){
                include('./jenis_aduan/lihat_aduan_kerosakan_komputer.php');
            }
            else if($jenis_aduan == "kerosakan_umum"){
                include('./jenis_aduan/lihat_aduan_kerosakan_umum.php');
            }
            else if($jenis_aduan == "kerosakan_penyaman_udara"){
                include('./jenis_aduan/lihat_aduan_kerosakan_aset_alih.php');
            }
            else{
                echo "<center><h1>???</h1></center>";
            }
            
        ?>
    </div>

    <?php $location_index = "../..";include('../../components/footer.php') ?>
</body>
</html>