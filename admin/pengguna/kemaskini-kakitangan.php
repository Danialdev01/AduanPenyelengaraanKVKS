<?php $title = "Kemaskini Kakitangan KVKS"; $location_index = "../.."; include('../../components/head.php')?>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <center>
            <h1 class="text-lg"><b>Kemaskini Kakitangan</b></h1>
            <br>
            <div
                class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form action="./system/kemaskini-kakitangan.php" method="post">

                    <!--Nama kakitangan input-->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <?php 
                            require_once('../../db/config.php');
                            $id_kakitangan = $_GET['id_kakitangan'];
                            $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE id_kakitangan = '$id_kakitangan'"); 
                            $kakitangan = mysqli_fetch_array($kakitangan_sql);
                        ?>
                        <input
                            name="nama_kakitangan"
                            value="<?php echo $kakitangan['nama_kakitangan'] ?>"   
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput90"
                            placeholder="Name" />
                        <label
                            for="exampleInput90"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Nama Kakitangan
                        </label>
                    </div>

                    <!--Jawatan Kakitangan input-->
                    <div class="relative mb-6">
                        <select name="jawatan_kakitangan" data-te-select-init data-te-select-filter="true" required>
                            <option>Jawatan Kakitangan</option>
                            <option <?php echo $kakitangan['jawatan_kakitangan'] == 'PENSYARAH JABATAN TEKNOLOGI MAKLUMAT' ? 'selected' : ''; ?> value="PENSYARAH JABATAN TEKNOLOGI MAKLUMAT">PENSYARAH JABATAN TEKNOLOGI MAKLUMAT</option>
                            <option <?php echo $kakitangan['jawatan_kakitangan'] == 'PENSYARAH JABATAN HOSPITALITY' ? 'selected' : ''; ?> value="PENSYARAH JABATAN HOSPITALITY">PENSYARAH JABATAN HOSPITALITY</option>
                            <option <?php echo $kakitangan['jawatan_kakitangan'] == 'PENSYARAH JABATAN PENIAGAAN' ? 'selected' : ''; ?> value="PENSYARAH JABATAN PENIAGAAN">PENSYARAH JABATAN PENIAGAAN</option>
                            <option <?php echo $kakitangan['jawatan_kakitangan'] == 'PENSYARAH JABATAN SENI REKA' ? 'selected' : ''; ?> value="PENSYARAH JABATAN SENI REKA">PENSYARAH JABATAN SENI REKA</option>
                            <option <?php echo $kakitangan['jawatan_kakitangan'] == 'PENSYARAH JABATAN UMUM' ? 'selected' : ''; ?> value="PENSYARAH JABATAN UMUM">PENSYARAH JABATAN UMUM</option>
                        </select>
                    </div>
                    <input type="hidden" name="id_kakitangan" value="<?php echo $kakitangan['id_kakitangan']?>">
                    
                    <!--Submit button-->
                    <button
                        type="submit"
                        class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Kemaskini Kakitangan
                    </button>
                </form>
            </div>
        </center>
    </div>

    <?php include('../../components/footer.php') ?>
</body>
</html>