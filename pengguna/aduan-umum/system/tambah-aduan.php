<?php
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        echo $nama_pelapor = $_POST['nama_pelapor'];
        echo "<br>";
        echo $tarikh_aduan = $_POST['tarikh_aduan'];
        echo "<br>";
        echo $lokasi_terperinci_aduan = mysqli_escape_string($connect,$_POST['lokasi_terperinci_aduan']);
        echo "<br>";
        echo $butiran_kerosakan = mysqli_escape_string($connect,$_POST['butiran_kerosakan']);
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
                    
                    echo $TmpName;
                    echo "<br>";
                    echo $newImageName;
                    echo "<br>";
                    echo $nama_file = $newImageName;
                    
        
                    $tambah_aduan_kerosakan_umum = mysqli_query($connect, "INSERT INTO aduan_kerosakan_umum VALUES (NULL,'$nama_pelapor','$lokasi_terperinci_aduan','$butiran_kerosakan','$tarikh_aduan', NULL, NULL, NULL, '$nama_file', '1')");
    
                    $_SESSION['prompt'] = "Berjaya Hantar Aduan";
                    header("location:../");
                }
            }
        }
        else{
            echo "No Image";
            $tambah_aduan_kerosakan_umum = mysqli_query($connect, "INSERT INTO aduan_kerosakan_umum VALUES (NULL,'$nama_pelapor','$lokasi_terperinci_aduan','$butiran_kerosakan','$tarikh_aduan', NULL, NULL, NULL, NULL, '1')");

            $_SESSION['prompt'] = "Berjaya Hantar Aduan";
            header("location:../");
        }

    }
    else{
        header("location:../");
    }
?>