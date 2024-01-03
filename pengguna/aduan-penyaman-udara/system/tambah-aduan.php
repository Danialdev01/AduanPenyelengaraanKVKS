<?php
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        echo $id_kakitangankvks = $_POST['id_kakitangan'];
        echo "<br>";
        echo $waktu_lokasi_kosong  = $_POST['waktu_lokasi_kosong'];
        echo "<br>";
        echo $lokasi  = mysqli_escape_string($connect,$_POST['lokasi']);
        echo "<br>";
        echo $nombor_siri_pendaftaran_aset  = mysqli_escape_string($connect,$_POST['nombor_siri_pendaftaran_aset']);
        echo "<br>";
        echo $tarikh_kerosakan  = $_POST['tarikh_kerosakan'];
        echo "<br>";
        echo $perihal_kerosakan  = mysqli_escape_string($connect,$_POST['perihal_kerosakan']);
        echo "<br>";

        if($_FILES["image"]["name"] != NULL || $_FILES["image"]["name"] != ""){

            if($_FILES["image"]["error"] === 4){
                $_SESSION['prompt'] = "Maaf Gambar Tidak Boleh Dijumpai";
                header("location:../");
            }
            else{
                $fileName = $_FILES["image"]["name"];
                $fileSize = $_FILES["image"]["size"];
                $TmpName = $_FILES["image"]["tmp_name"];
                
                $validImageExtension = ['jpg', 'jpeg', 'png'];
    
                $imageExtension = explode('.', $fileName);
                $imageExtension = strtolower(end($imageExtension));
    
                if(!in_array($imageExtension, $validImageExtension)){
                    $_SESSION['prompt'] = "Maaf Gambar Tidak Valid";
                    header("location:../");               
                }
                else{
                    $newImageName = uniqid();
                    $newImageName .= '.' . $imageExtension;
                    $destination = __DIR__ . "/uploads/" . $newImageName;
                    move_uploaded_file($TmpName, $destination);
                    
                    $TmpName;
                    echo "<br>";
                    echo $newImageName;
                    echo "<br>";
                    $nama_file = $newImageName;
                    
                    $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_kerosakan_penyaman_udara VALUES (NULL, '$id_kakitangankvks', '$waktu_lokasi_kosong', '$lokasi', '$nombor_siri_pendaftaran_aset', '$tarikh_kerosakan', '$perihal_kerosakan', NULL, '$nama_file', NULL, NULL, NULL, '1')");
                    $_SESSION['prompt'] = "Berjaya Hantar Aduan";
                    header("location:../");
                }
            }
        }
        else {
            echo "no pic";
            $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_kerosakan_penyaman_udara VALUES (NULL, '$id_kakitangankvks', '$waktu_lokasi_kosong', '$lokasi', '$nombor_siri_pendaftaran_aset', '$tarikh_kerosakan', '$perihal_kerosakan', NULL, NULL, NULL, NULL, NULL, '1')");
            $_SESSION['prompt'] = "Berjaya Hantar Aduan";
            header("location:../");
        }

    
    }
    else{
        header("location:../");
    }

?>