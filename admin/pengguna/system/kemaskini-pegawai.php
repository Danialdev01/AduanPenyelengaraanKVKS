<?php 
    session_start();
    require_once('../../../db/config.php');

    if(isset($_POST['submit'])){
        $id_pegawai = $_POST['id_pegawai'];
        $nama_pegawai = mysqli_escape_string($connect, $_POST['nama_pegawai']);
        $jawatan_pegawai = $_POST['jawatan_pegawai'];
        $password_pegawai_lama = $_POST['password_pegawai_lama'];
        $password_pegawai_baru = $_POST['password_pegawai_baru'];
    
        // cari password lama pegawai dalam database
        $pegawai_sql = mysqli_query($connect, "SELECT password_pegawai FROM pegawai_teknikal WHERE id_pegawai = '$id_pegawai'");
        $pegawai = mysqli_fetch_array($pegawai_sql);
        $password_pegawai = $pegawai['password_pegawai'];

        // verify password
        $isBetul = password_verify($password_pegawai_lama, $password_pegawai);
        if($isBetul == 1){
            
            $password_pegawaiHashed = password_hash($password_pegawai_baru, PASSWORD_DEFAULT);

            $kemaskini_pegawai = mysqli_query($connect, "UPDATE pegawai_teknikal SET nama_pegawai = '$nama_pegawai', password_pegawai = '$password_pegawaiHashed', jawatan_pegawai = '$jawatan_pegawai' WHERE id_pegawai = '$id_pegawai'");

            $_SESSION['prompt'] = "Berjaya Kemaskini Admin";
            header("location:../");
        }
        else{
            $_SESSION['prompt'] = "Password Lama salah";
            header("location:../");
        }
    }
    else{
        $_SESSION['prompt'] = "Gagal Kemaskini Admin";
        header("location:../");
    }

?>