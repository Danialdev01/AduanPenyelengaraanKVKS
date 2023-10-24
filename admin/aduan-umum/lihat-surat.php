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
    
        $html = file_get_contents("borang.php");

        

        $dompdf->loadHtml($html);
        $dompdf->render();
    
        // $dompdf->addInfo("Borang Penyelengaraan", "Penyelengaraan Elektronik");
        $dompdf->stream("borang.pdf", ["Attachment" => 0]);
    }
    header("location:./")


?>