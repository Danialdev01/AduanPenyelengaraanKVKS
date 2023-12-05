
<center>
  <div class="aduan-data-table p-2">
    <div class="mb-3">
      <div class="justify-end relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          id="datatable-search-input1"
          type="search"
          class="max-w-sm relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1" />
      </div>
    </div>
    <div id="datatable1"></div>
  </div>
</center>
<div class="tambah">
    <a href="tambah-pegawai.php">
      <button style="background-color: black;border-radius:50%;width:40px;height:40px;color:white;font-size:1.3rem;position:relative;bottom:5%;left:90%">+</button>
    </a>
  </div>

<script>
    const data1 = {
  columns: [
    'No',
    'Nama Admin',
    'Jawatan',
    { label: "Kemaskini", field: "kemaskini", sort: false },
    { label: "Delete", field: "delete", sort: false },
  ],
  rows: [
    <?php 
        require_once('../../db/config.php');
        $pegawai_sql = mysqli_query($connect, "SELECT * FROM pegawai_teknikal WHERE status_pegawai = '1'");
        $no = 0;
        while($pegawai = mysqli_fetch_array($pegawai_sql)){
            $no++;

            $nama_pegawai = $pegawai['nama_pegawai'];
            $jawatan_pegawai = $pegawai['jawatan_pegawai'];
            $id_pegawai = $pegawai['id_pegawai'];
        echo "[\"$no\", \"$nama_pegawai\", \"$jawatan_pegawai\", \"<a href='kemaskini-pegawai.php?id_pegawai=$id_pegawai'><button style='background-color:blue;padding:5px;color:white'>Kemaskini</button></a>\", \"<a href='system/batal-pegawai.php?id_pegawai=$id_pegawai'><button style='background-color:red;padding:5px;color:white'>Delete</button></a>\"],";


        }
    ?>
  ],
};

const instance1 = new te.Datatable(document.getElementById('datatable1'), data1)

document.getElementById('datatable-search-input1').addEventListener('input', (e) => {
  instance1.search(e.target.value);
});
</script>