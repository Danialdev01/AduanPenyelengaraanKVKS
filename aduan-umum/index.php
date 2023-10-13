<?php $title = "Kerosakan Komputer"; $location_index = ".."; include('../components/head.php')?>
<body>
    <?php $location_index = ".."; include('../components/header.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <!-- Form Aduan Kerosakan -->
        <center>
            <h2>Aduan Kerosakan Umum</h2>
            <br>
            <div
                class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form action="./system/tambah-aduan.php" method="post">

                    <!-- Nama Pensyarah -->
                    <div class="relative mb-3">
                        <select name="nama_pelapor" data-te-select-init data-te-select-filter="true" required>
                            <option value="">Nama Staff / Pensyarah</option>
                            <?php
                                require_once('../db/config.php');
                                $pensyarah_sql = mysqli_query($connect, "SELECT * FROM pensyarah");
                                while($pensyarah = mysqli_fetch_array($pensyarah_sql)){
                                    ?>
                                    <option value="<?php echo $pensyarah['nama_pensyarah']?>"><?php echo $pensyarah['nama_pensyarah']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!-- Tarikh aduan-->
                    <div
                        class="relative mb-3"
                        data-te-date-timepicker-init
                        data-te-input-wrapper-init
                        data-te-inline="true"
                        data-te-disable-past="true">
                        <input
                            name="tarikh_aduan"
                            data-te-date-timepicker-toggle-ref
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="form2"
                            required />
                        <label
                            for="form2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Tarikh Aduan</label
                        >
                    </div>

                    <!-- Lokasi input-->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="lokasi_terperinci_aduan"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            placeholder="Name" 
                            required
                            />

                        <label
                            for="exampleInput7"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Lokasi Terperinci Aduan
                        </label>
                    </div>

                    <!-- Kerosakan -->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="butiran_Kerosakan"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            placeholder="Name" 
                            required
                            />

                        <label
                            for="exampleInput7"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Butiran Kerosakan
                        </label>
                    </div>
    
                    <!--Submit button-->
                    <button
                    type="submit"
                    class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Hantar Aduan
                    </button>
                </form>
            </div>
            <br>
        </center>
    </div>

    <?php include('../components/footer.php') ?>
</body>
</html>