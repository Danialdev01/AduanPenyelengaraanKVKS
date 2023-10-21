<?php
require_once('../../db/config.php');

use Dompdf\Dompdf;
use Dompdf\Options;

    if($_GET['id_aduan'] != ""){

        require __DIR__ . "../../../vendor/autoload.php";
    
        $options = new Options();
        $options->setChroot(__DIR__);
    
        $dompdf = new Dompdf($options);
        $dompdf->setPaper("A4", "Portrate");
    
        $html = file_get_contents("borang.html");

        $id_aduan = $_GET['id_aduan'];
        // dapatkan info tentang aduan selected
        $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_komputer WHERE id_aduan = '$id_aduan'");
        $aduan = mysqli_fetch_array($aduan_sql);

        // dapatkan info kakitangankvks aduan selected
        $id_kakitangan = $aduan['id_kakitangan'];
        $kakitangankvks_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE id_kakitangan = '$id_kakitangan'");
        $kakitangankvks = mysqli_fetch_array($kakitangankvks_sql);

        // Bahagian I (Untuk diisi oleh Pengadu)
        $html = str_replace("{{ jenis_aset }}", ucfirst($aduan['nama_aset']), $html);
        $html = str_replace("{{ nombor_siri_pendaftaran_aset }}", $aduan['nombor_siri_pendaftaran_aset'], $html);
        $html = str_replace("{{ kakitangankvks }}", ucfirst(strtolower($kakitangankvks['nama_kakitangan'])), $html);
        $tarikh_kerosakan = str_split($aduan['tarikh_kerosakan'], 10);
        $html = str_replace("{{ tarikh_kerosakan }}", $tarikh_kerosakan[0], $html);
        $html = str_replace("{{ perihal_kerosakan }}", $aduan['perihal_kerosakan'], $html);
        $html = str_replace("{{ jawatan_kakitangankvks }}", ucfirst(strtolower($kakitangankvks['jawatan_kakitangan'])), $html);
    
        // Bahagian II (Untuk diisi oleh Pegawai Aset/ pegawai Teknikal)
        $html = str_replace("{{ kos_penyelengaraan_terdahulu }}", $aduan['kos_penyelengaraan_terdahulu'], $html);
        $html = str_replace("{{ kos_penyelengaraan_anggaran }}", $aduan['kos_penyelengaraan_anggaran'], $html);
        $html = str_replace("{{ ulasan_aduan }}", ucfirst(strtolower($aduan['ulasan_aduan'])), $html);


        $dompdf->loadHtml($html);
        $dompdf->render();
    
        // $dompdf->addInfo("Borang Penyelengaraan", "Penyelengaraan Elektronik");
        $dompdf->stream("borang.pdf", ["Attachment" => 0]);
    }
    header("location:./")


?>