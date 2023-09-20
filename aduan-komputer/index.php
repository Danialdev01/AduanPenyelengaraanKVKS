<?php $title = "Kerosakkan Komputer"; $location_index = ".."; include('../components/head.php')?>
<body>
    <?php $location_index = ".."; include('../components/header.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <!-- Form Aduan Kerosakkan -->
        <center>
            <div
                class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form action="./system/tambah-aduan.php" method="post">

                    <!-- Nama Pensyarah -->
                    <div class="relative mb-3">
                        <select name="id_pensyarah" data-te-select-init data-te-select-filter="true" required>
                            <option value="">Nama Pensyarah</option>
                            <?php
                                require_once('../db/config.php');
                                $pensyarah_sql = mysqli_query($connect, "SELECT * FROM pensyarah");
                                while($pensyarah = mysqli_fetch_array($pensyarah_sql)){
                                    ?>
                                    <option value="<?php echo $pensyarah['id_pensyarah']?>"><?php echo $pensyarah['nama_pensyarah']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!-- Waktu Bengkel kosong -->
                    <div
                        class="relative mb-3"
                        data-te-date-timepicker-init
                        data-te-input-wrapper-init
                        data-te-inline="true"
                        data-te-disable-past="true">
                        <input
                            name="waktu_bengkel_kosong"
                            data-te-date-timepicker-toggle-ref
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="form2"
                            required />
                        <label
                            for="form2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Waktu Bengkel Kosong</label
                        >
                    </div>

                    <!--Lokasi input-->
                    <div class="relative mb-3">
                        <select name="id_lokasi" data-te-select-init data-te-select-filter="true" required>
                            <option value="">Lokasi Asset</option>
                            <?php
                                require_once('../db/config.php');
                                $lokasi_sql = mysqli_query($connect, "SELECT * FROM lokasi");
                                while($lokasi = mysqli_fetch_array($lokasi_sql)){
                                    ?>
                                    <option value="<?php echo $lokasi['id_lokasi']?>"><?php echo $lokasi['nama_lokasi']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!--DESC Lokasi input-->
                    <!-- TODO buat image location aset -->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="desc_lokasi"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            placeholder="Name" 
                            required
                            />

                        <label
                            for="exampleInput7"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Desc Lokasi Aset
                        </label>
                    </div>

                    <!--Jenis Asset-->
                    <div class="relative mb-3">
                        <select name="id_asset" data-te-select-init data-te-select-filter="true" required>
                            <option value="">Jenis Asset</option>
                            <?php
                                require_once('../db/config.php');
                                $asset_sql = mysqli_query($connect, "SELECT * FROM asset WHERE jenis_asset = 'ELEKTRONIK'");
                                while($asset = mysqli_fetch_array($asset_sql)){
                                    ?>
                                    <option value="<?php echo $asset['id_asset']?>"><?php echo $asset['nama_asset']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!-- Jenis kepuyaan aset -->
                    <div class="relative mb-3">
                        <select name="jenis_kepunyaan_asset" data-te-select-init required>
                            <option value="">Jenis kepunyaan Asset</option>
                            <option value="sendiri">Persendirian</option>
                            <option value="sumbangan">Sumbangan</option>
                        </select>
                    </div>

                    <!--No Siri pendaftaran aset-->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="nombor_siri_pendaftaran_asset"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            placeholder="Email address" 
                            required/>
                        <label
                            for="exampleInput8"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Nombor Siri Pendaftaran
                        </label>
                    </div>

                    <!-- Tarikh Kerosakkan -->
                    <div
                        class="relative mb-3"
                        data-te-date-timepicker-init
                        data-te-input-wrapper-init
                        data-te-inline="true"
                        data-te-disable-past="true">
                        <input
                            name="tarikh_kerosakkan"
                            data-te-date-timepicker-toggle-ref
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="form2"
                            required />
                        <label
                            for="form2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Waktu Kerosakkan Asset</label
                        >
                    </div>
    
                    <!--Perihal Kerosakkan-->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                            name="perihal_kerosakkan"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                            required></textarea>
                        <label
                            for="exampleFormControlTextarea13"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Perihal Kerosakkan
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