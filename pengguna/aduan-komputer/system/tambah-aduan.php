<?php
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        echo $id_kakitangankvks = $_POST['id_kakitangan'];
        echo "<br>";
        echo $waktu_bengkel_kosong  = $_POST['waktu_bengkel_kosong'];
        echo "<br>";
        echo $id_lokasi  = $_POST['id_lokasi'];
        echo "<br>";
        echo $desc_lokasi 	 = mysqli_escape_string($connect,$_POST['desc_lokasi']);
        echo "<br>";
        echo $id_aset = $_POST['id_aset'];
        echo "<br>";
        echo $jenis_kepunyaan_aset  = $_POST['jenis_kepunyaan_aset'];
        echo "<br>";
        echo $nombor_siri_pendaftaran_aset  = mysqli_escape_string($connect,$_POST['nombor_siri_pendaftaran_aset']);
        echo "<br>";
        echo $tarikh_kerosakan  = $_POST['tarikh_kerosakan'];
        echo "<br>";
        echo $perihal_kerosakan  = mysqli_escape_string($connect,$_POST['perihal_kerosakan']);

        if($id_aset != 0){

            if($id_lokasi != 0){
    
                if($jenis_kepunyaan_aset != 0){
        
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
                                
                                $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_kerosakan_komputer VALUES (NULL, '$id_kakitangankvks', '$waktu_bengkel_kosong', '$id_lokasi', '$desc_lokasi', '$id_aset', '$jenis_kepunyaan_aset', '$nombor_siri_pendaftaran_aset', '$tarikh_kerosakan', '$perihal_kerosakan', NULL, '$nama_file', NULL, NULL, NULL, '1');");
                                $_SESSION['prompt'] = "Berjaya Hantar Aduan";
                                header("location:../");
                            }
                        }
                    }
                    else {
                        $tambah_aduan = mysqli_query($connect, "INSERT INTO aduan_kerosakan_komputer VALUES (NULL, '$id_kakitangankvks', '$waktu_bengkel_kosong', '$id_lokasi', '$desc_lokasi', '$id_aset', '$jenis_kepunyaan_aset', '$nombor_siri_pendaftaran_aset', '$tarikh_kerosakan', '$perihal_kerosakan', NULL, NULL, NULL, NULL, NULL, '1');");
                        $_SESSION['prompt'] = "Berjaya Hantar Aduan";
                        header("location:../");
                    }
                }
                else{
                    $_SESSION['prompt'] = "Sila Pilih Jenis Kepunyaan Aset";
                    header("location:../");
                }
            }
            else{
                $_SESSION['prompt'] = "Sila Pilih Lokasi Aset";
                header("location:../");
            }
        }
        else{
            $_SESSION['prompt'] = "Sila Pilih Lokasi Aset";
            header("location:../");
        }
    }
    else{
        header("location:../");
    }

?>