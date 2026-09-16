<?php
require_once('../../db/config.php');

use Dompdf\Dompdf;
use Dompdf\Options;


    if($_GET['id_aduan'] != ""){

        require __DIR__ . "../../../vendor/autoload.php";
    
        $options = new Options();
        $options->setChroot(__DIR__);
        $options->set('isRemoteEnabled', true);
    
        $dompdf = new Dompdf($options);
        $dompdf->setPaper("A4", "Portrate");
    
        $html = file_get_contents("borang.html");

        $id_aduan = $_GET['id_aduan'];
        $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE id_aduan = '$id_aduan'");
        $aduan = mysqli_fetch_array($aduan_sql);

        $html = str_replace("{{ nama_pelapor }}", strtoupper($aduan['nama_pelapor']), $html);
        $html = str_replace("{{ lokasi_terperinci_aduan }}", ucfirst(strtolower($aduan['lokasi_terperinci_aduan'])), $html);
        $html = str_replace("{{ tarikh_aduan }}", ucfirst(strtolower($aduan['tarikh_aduan'])), $html);
        $gambarBukti = '<div style="padding: 10px; border: 1px solid #ccc; color: #666; font-size: 12px; width: 180px; text-align: center;">Tiada bukti gambar</div>';
        if (!empty($aduan['nama_img_ref'])) {
            $gambarPath = __DIR__ . "/../../pengguna/aduan-umum/system/uploads/" . basename($aduan['nama_img_ref']);
            if (file_exists($gambarPath)) {
                $gambarData = file_get_contents($gambarPath);
                $gambarJenis = mime_content_type($gambarPath);
                if (in_array($gambarJenis, ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'], true)) {
                    $gambarBukti = '<img src="data:' . $gambarJenis . ';base64,' . base64_encode($gambarData) . '" alt="Bukti aduan" style="display: block; max-width: 180px; max-height: 120px; margin-bottom: 8px; border: 1px solid #ccc;" />';
                }
            }
        }
        $html = str_replace("{{ bukti_gambar }}", $gambarBukti, $html);
        $html = str_replace("{{ butiran_kerosakan }}", ucfirst(strtolower($aduan['butiran_kerosakan'])), $html);
        $html = str_replace("{{ ulasan_aduan }}", ucfirst(strtolower($aduan['ulasan_aduan'])), $html);
        $html = str_replace("{{ tarikh_tindakan_aduan }}", ucfirst(strtolower($aduan['tarikh_tindakkan_aduan'])), $html);

        $id_pegawai = $aduan['id_admin'];
        $admin_sql = mysqli_query($connect, "SELECT * FROM pegawai_teknikal WHERE id_pegawai = '$id_pegawai'");
        $admin = mysqli_fetch_array($admin_sql);
        $nama_admin = $admin['nama_pegawai'];

        $html = str_replace("{{  nama_admin  }}", strtoupper($nama_admin), $html);

        $dompdf->loadHtml($html);
        $dompdf->render();
    
        // $dompdf->addInfo("Borang Penyelengaraan", "Penyelengaraan Elektronik");
        $dompdf->stream("borang.pdf", ["Attachment" => 0]);
    }
    else{
        header("location:./");
    }


?>