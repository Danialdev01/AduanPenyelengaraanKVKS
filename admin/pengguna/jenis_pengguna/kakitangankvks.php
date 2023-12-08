
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
  <div class="tambah">
    <a href="tambah-kakitangan.php">
      <button style="background-color: black;border-radius:50%;width:40px;height:40px;color:white;font-size:1.3rem;position:relative;bottom:5%;left:90%">+</button>
    </a>
  </div>

<script>
    const data2 = {
  columns: [
    'No',
    'Nama Kakitangan',
    'Jawatan',
    { label: "Kemaskini", field: "kemaskini", sort: false },
    { label: "Delete", field: "delete", sort: false },
  ],
  rows: [
    <?php 
        require_once('../../db/config.php');
        $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE status_kakitangan = '1'");
        $no = 0;
        while($kakitangan = mysqli_fetch_array($kakitangan_sql)){
            $no++;

            $nama_kakitangan = $kakitangan['nama_kakitangan'];
            $jawatan_kakitangan = $kakitangan['jawatan_kakitangan'];
            $id_kakitangan = $kakitangan['id_kakitangan'];
        echo "[\"$no\", \"$nama_kakitangan\", \"$jawatan_kakitangan\", \"<a href='kemaskini-kakitangan.php?id_kakitangan=$id_kakitangan'><button style='background-color:blue;padding:5px;color:white'>Kemaskini</button></a>\", \"<a href='system/batal-kakitangan.php?id_kakitangan=$id_kakitangan'><button style='background-color:red;padding:5px;color:white'>Delete</button></a>\"],";


        }
    ?>
  ],
};

const instance2 = new te.Datatable(document.getElementById('datatable2'), data2)

document.getElementById('datatable-search-input2').addEventListener('input', (e) => {
  instance2.search(e.target.value);
});
</script>