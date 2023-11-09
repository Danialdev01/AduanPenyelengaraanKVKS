<?php
require_once('../../db/config.php');

use Dompdf\Dompdf;
use Dompdf\Options;


    if($_GET['id_aduan'] != ""){

        require __DIR__ . "../../../vendor/autoload.php";
    
        $options = new Options();
        $options->setChroot(__DIR__);
        $options->set(array('isRemoteEnabled' => true));
    
        $dompdf = new Dompdf($options);
        $dompdf->setPaper("A4", "Portrate");
    
        // $html = '<img src="src/assets/images/kvks.png">';
        $html = file_get_contents("borang.html");

        $id_aduan = $_GET['id_aduan'];
        $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE id_aduan = '$id_aduan'");
        $aduan = mysqli_fetch_array($aduan_sql);

        $html = str_replace("{{ nama_pelapor }}", strtoupper($aduan['nama_pelapor']), $html);
        $html = str_replace("{{ lokasi_terperinci_aduan }}", ucfirst(strtolower($aduan['lokasi_terperinci_aduan'])), $html);
        $html = str_replace("{{ tarikh_aduan }}", ucfirst(strtolower($aduan['tarikh_aduan'])), $html);

        $html = str_replace("{{ butiran_kerosakan }}", ucfirst(strtolower($aduan['butiran_kerosakan'])), $html);
        $html = str_replace("{{ tindakan_teknikal }}", ucfirst(strtolower($aduan['tindakan_teknikal_aduan'])), $html);
        $html = str_replace("{{ tarikh_tindakan_aduan }}", ucfirst(strtolower($aduan['tarikh_tindakkan_aduan'])), $html);

        $dompdf->loadHtml($html);
        $dompdf->render();
    
        // $dompdf->addInfo("Borang Penyelengaraan", "Penyelengaraan Elektronik");
        $dompdf->stream("borang.pdf", ["Attachment" => 0]);
    }
    header("location:./")


?>