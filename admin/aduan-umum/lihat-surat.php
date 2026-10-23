<?php
require_once('../../db/config.php');

use Dompdf\Dompdf;
use Dompdf\Options;

if(isset($_GET['id_aduan']) && $_GET['id_aduan'] != ""){
    if(!isset($_GET['gambar'])){
        ?>
        <!DOCTYPE html>
        <html lang="ms">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pilihan Cetakan</title>
            <style>
                * { box-sizing: border-box; }
                body { font-family: Arial, sans-serif; background: #f0f0f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 16px; }
                .modal { background: #fff; padding: 30px 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; width: 100%; max-width: 400px; }
                .modal h2 { margin-top: 0; font-size: 20px; color: #333; }
                .modal p { color: #666; font-size: 14px; line-height: 1.5; }
                .btn-group { display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap; }
                .btn { padding: 12px 20px; border: none; border-radius: 6px; font-size: 14px; cursor: pointer; text-decoration: none; display: inline-block; flex: 1 1 auto; min-width: 130px; text-align: center; }
                .btn-ya { background: #28a745; color: #fff; }
                .btn-ya:hover { background: #218838; }
                .btn-tidak { background: #dc3545; color: #fff; }
                .btn-tidak:hover { background: #c82333; }
                @media (max-width: 480px) {
                    .modal { padding: 22px 18px; border-radius: 8px; }
                    .modal h2 { font-size: 17px; }
                    .modal p { font-size: 13px; }
                    .btn-group { flex-direction: column; gap: 10px; }
                    .btn { width: 100%; padding: 13px 16px; font-size: 14px; }
                }
            </style>
        </head>
        <body>
            <div class="modal">
                <h2>Cetak Borang Aduan</h2>
                <p>Adakah anda ingin memasukkan <strong>gambar bukti</strong> dalam borang PDF?</p>
                <div class="btn-group">
                    <a href="?id_aduan=<?= urlencode($_GET['id_aduan']) ?>&gambar=1" class="btn btn-ya">Ya, Sertakan Gambar</a>
                    <a href="?id_aduan=<?= urlencode($_GET['id_aduan']) ?>&gambar=0" class="btn btn-tidak">Tidak</a>
                </div>
            </div>
        </body>
        </html>
        <?php
        exit;
    }

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

    $logoKvks = ''; 
    $pathLogo = __DIR__ . "/../../src/assets/images/kvks.jpeg";
    if (file_exists($pathLogo)) {
        $logoData = file_get_contents($pathLogo);
        $logoJenis = mime_content_type($pathLogo);
        $logoKvks = 'data:' . $logoJenis . ';base64,' . base64_encode($logoData);
    }
    $html = str_replace("{{ logo_kvks }}", $logoKvks, $html);
    $html = str_replace("{{ nama_pelapor }}", strtoupper($aduan['nama_pelapor']), $html);
    $html = str_replace("{{ lokasi_terperinci_aduan }}", ucfirst(strtolower($aduan['lokasi_terperinci_aduan'])), $html);
    $html = str_replace("{{ tarikh_aduan }}", ucfirst(strtolower($aduan['tarikh_aduan'])), $html);

    $tunjuk_gambar = $_GET['gambar'];

    $gambarBukti = ''; 

    if ($tunjuk_gambar == '1') {
        if (!empty($aduan['nama_img_ref'])) {
            $gambarPath = __DIR__ . "/../../pengguna/aduan-umum/system/uploads/" . basename($aduan['nama_img_ref']);
            if (file_exists($gambarPath)) {
                $gambarData = file_get_contents($gambarPath);
                $gambarJenis = mime_content_type($gambarPath);
                if (in_array($gambarJenis, ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'], true)) {
                    $gambarBukti = '<img src="data:' . $gambarJenis . ';base64,' . base64_encode($gambarData) . '" alt="Bukti aduan" style="display: block; max-width: 180px; max-height: 120px; margin-bottom: 8px; border: 1px solid #ccc;" />';
                }
            }
        } else {
            $gambarBukti = '<div style="padding: 10px; border: 1px solid #ccc; color: #666; font-size: 12px; width: 180px; text-align: center;">Tiada bukti gambar</div>';
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
    $dompdf->stream("borang.pdf", ["Attachment" => 0]);
}
else{
    header("location:./");
}
?>