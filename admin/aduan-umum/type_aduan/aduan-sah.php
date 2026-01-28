<center>
    <div class="aduan-data-table p-2">
        <div class="mb-3">
          <div class="justify-end relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              id="datatable-search-input2"
              type="search"
              class="max-w-sm relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2" />
          </div>
        </div>
        <div id="datatable2"></div>
    </div>
</center>

<script>
    const data2 = {
      columns: [
        'No',
        'Nama Pelapor',
        'Tarikh Aduan',
        'Butiran Kerosakan',
        'Lokasi Aset',
        { label: "Tindakan", field: "aduan_batal", sort: false },
      ],
      rows: [
        <?php 
            require_once('../../db/config.php');
            $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE status_aduan = '2' ORDER BY STR_TO_DATE(tarikh_aduan, '%d/%m/%Y') DESC");
            $no = 0;
            $rows = [];
            
            while($aduan = mysqli_fetch_array($aduan_sql)){
                $no++;

                $nama_pelapor = $aduan['nama_pelapor'];
                $tarikh_aduan = $aduan['tarikh_aduan'];
                $butiran_kerosakan = $aduan['butiran_kerosakan'];
                $lokasi_terperinci = $aduan['lokasi_terperinci_aduan'];
                $id_aduan = $aduan['id_aduan'];
                
                $rows[] = "[\"$no\", \"$nama_pelapor\", \"$tarikh_aduan\", \"$butiran_kerosakan\", \"$lokasi_terperinci\",\"<div class='flex'>  <div class='p-1'><a href='./system/batal-aduan.php?id_aduan=$id_aduan'><button style='background-color:red;padding:5px;color:white'>Batal</button></a></div>  <div class='p-1'><a href='lihat-surat.php?id_aduan=$id_aduan'><button style='background-color:blue;padding:5px;color:white'>Lihat</button></a></div> </div>\", \"\"]";
            }
            
            echo implode(',', $rows);
        ?>
      ],
    };

    console.log('Total rows datatable2:', data2.rows.length);
    console.log('Data2:', data2);

    const instance2 = new te.Datatable(document.getElementById('datatable2'), data2);

    document.getElementById('datatable-search-input2').addEventListener('input', (e) => {
      instance2.search(e.target.value);
    });
</script>