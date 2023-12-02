<?php $title = "Aduan Terdahulu"; $location_index = "../.."; include('../../components/head.php')?>
<?php require_once('../../db/config.php');?>
<style>
    td{
      color: black;
      font-weight: bold;
    }
</style>
<script src="../../dist/tw-elements.umd.min.js"></script>
<body>
    <?php $location_index = "../.."; include('../../components/header.php') ?>
    
    <div class="main-container p-2">
        <br>
        <!-- Form Aduan Kerosakan -->
        <center>
            <h2>Aduan Terdahulu</h2>
        </center>
        <br>
        
        <center>
            <div class="aduan-data-table p-2">
                <div class="mb-3">
                <div class="justify-end relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                    id="datatable-search-input3"
                    type="search"
                    class="max-w-sm relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon3" />
                </div>
                </div>
                <div id="datatable3"></div>
            </div>
        </center>
    </div>
        

<script>
    const data3 = {
  columns: [
    'Jenis Aduan',
    'Jenis Kerosakan',
    'Tarikh Kerosakan',
    'Lokasi Kerosakan',
    { label: "Status Aduan", field: "contact", sort: true },
    { label: "Lihat Aduan", field: "contact2", sort: false },
  ],
  rows: [
    <?php 
        $id_kakitangan = $_SESSION['idKakitangan'];
        $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE id_kakitangan = '$id_kakitangan'");
        $kakitangan = mysqli_fetch_array($kakitangan_sql);
        $nama_kakitangan = $kakitangan['nama_kakitangan'];
    ?>
    <?php 
        // Aduan kerosakan komputer 
        $aduan_kerosakan_komputer_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_komputer WHERE id_kakitangan = '$id_kakitangan'");

        while($aduan_kerosakan_komputer = mysqli_fetch_array($aduan_kerosakan_komputer_sql)){

            $id_aset = $aduan_kerosakan_komputer['id_aset'];
            $aset_sql = mysqli_query($connect, "SELECT * FROM aset WHERE id_aset = '$id_aset'");
            $aset = mysqli_fetch_array($aset_sql);

            $id_aduan_kerosakan_komputer = $aduan_kerosakan_komputer['id_aduan'];
            $jenis_aset = $aset['nama_aset'];
            $tarikh_kerosakan = $aduan_kerosakan_komputer['tarikh_kerosakan'];
            $id_lokasi = $aduan_kerosakan_komputer['id_lokasi'];
            $lokasi_sql = mysqli_query($connect, "SELECT * FROM lokasi WHERE id_lokasi = '$id_lokasi'");
            $lokasi = mysqli_fetch_array($lokasi_sql);
            $nama_lokasi = $lokasi['nama_lokasi'];
            $status_aduan = $aduan_kerosakan_komputer['status_aduan'];

            if($status_aduan == 1){$status_aduan_text = "Sedang Diproses";$color = "blue";}
            else if($status_aduan == 2){$status_aduan_text = "Telah Disiapkan";$color = "green";}
            else if($status_aduan == 0){$status_aduan_text = "Telah Dibatalkan";$color = "red";}
            else{$status_aduan_text = "Error";}

        echo "[\"Kerosakan Komputer\", \"$jenis_aset\", \"$tarikh_kerosakan\", \"$nama_lokasi\", \"<p style='color:$color'>$status_aduan_text<p>\", \"<a href='lihat-aduan.php?id_aduan=$id_aduan_kerosakan_komputer&jenis=kerosakan_komputer'><button style='background-color:blue;padding:5px;color:white'>Lihat Aduan</button></a>\"],";


        }
    ?>

    <?php 
        // Aduan kerosakan penyaman udara
        $aduan_kerosakan_penyaman_udara_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_penyaman_udara WHERE id_kakitangan = '$id_kakitangan'");

        while($aduan_kerosakan_penyaman_udara = mysqli_fetch_array($aduan_kerosakan_penyaman_udara_sql)){

            $id_aduan_kerosakan_penyaman_udara = $aduan_kerosakan_penyaman_udara['id_aduan'];
            $tarikh_kerosakan = $aduan_kerosakan_penyaman_udara['tarikh_kerosakan'];
            $lokasi = $aduan_kerosakan_penyaman_udara['lokasi'];
            $status_aduan = $aduan_kerosakan_penyaman_udara['status_aduan'];

            if($status_aduan == 1){$status_aduan_text = "Sedang Diproses";$color = "blue";}
            else if($status_aduan == 2){$status_aduan_text = "Telah Disiapkan";$color = "green";}
            else if($status_aduan == 0){$status_aduan_text = "Telah Dibatalkan";$color = "red";}
            else{$status_aduan_text = "Error";}

        echo "[\"Kerosakan Penyaman Udara\", \"Penyaman Udara\", \"$tarikh_kerosakan\", \"$lokasi\", \"<p style='color:$color'>$status_aduan_text<p>\", \"<a href='lihat-aduan.php?id_aduan=$id_aduan_kerosakan_penyaman_udara&jenis=kerosakan_penyaman_udara'><button style='background-color:blue;padding:5px;color:white'>Lihat Aduan</button></a>\"],";


        }
    ?>

    <?php 
        // Aduan kerosakan umum 
        $aduan_kerosakan_umum_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE nama_pelapor = '$nama_kakitangan'");

        while($aduan_kerosakan_umum = mysqli_fetch_array($aduan_kerosakan_umum_sql)){

            $id_aduan_kerosakan_umum = $aduan_kerosakan_umum['id_aduan'];
            $butiran_kerosakan = strtoupper($aduan_kerosakan_umum['butiran_kerosakan']);
            $tarikh_aduan = $aduan_kerosakan_umum['tarikh_aduan'];
            $lokasi_terperinci_aduan = ucfirst($aduan_kerosakan_umum['lokasi_terperinci_aduan']);
            $status_aduan = $aduan_kerosakan_umum['status_aduan'];

            if($status_aduan == 1){$status_aduan_text = "Sedang Diproses";$color = "blue";}
            else if($status_aduan == 2){$status_aduan_text = "Telah Disiapkan";$color = "green";}
            else if($status_aduan == 0){$status_aduan_text = "Telah Dibatalkan";$color = "red";}
            else{$status_aduan_text = "Error";}

        echo "[\"Kerosakan Umum\", \"$butiran_kerosakan\", \"$tarikh_aduan\", \"$lokasi_terperinci_aduan\", \"<p style='color:$color'>$status_aduan_text<p>\", \"<a href='lihat-aduan.php?id_aduan=$id_aduan_kerosakan_umum&jenis=kerosakan_umum'><button style='background-color:blue;padding:5px;color:white'>Lihat Aduan</button></a>\"],";


        }
    ?>
    
  ],
};

const instance3 = new te.Datatable(document.getElementById('datatable3'), data3)

document.getElementById('datatable-search-input3').addEventListener('input', (e) => {
  instance3.search(e.target.value);
});
</script>


    <?php $location_index = "../.."; include('../../components/footer.php') ?>
</body>
</html>