<?php $title = "Kerosakan Komputer"; $location_index = "../.."; include('../../components/head.php')?>
<?php require_once('../../db/config.php');?>
<body>
    <?php $location_index = "../.."; include('../../components/header.php') ?>
    
    <div class="main-container p-2">
        <br>
        <!-- Form Aduan Kerosakan -->
        <center>
            <h2>Aduan Kerosakan Komputer</h2>
            <br>
            <div
                class="z-[100] block max-w-xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form action="./system/tambah-aduan.php" method="post" enctype="multipart/form-data">
                    
                    <?php 
                        $id_kakitangan = $_SESSION['idKakitangan'];
                    ?>
                    <!-- id kakitangan -->
                    <input type="hidden" name="id_kakitangan" value="<?php echo $id_kakitangan ?>">

                    

                    <!-- gambar kerosakan -->
                    <div class="mb-3 text-left">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Muat Naik Gambar Kerosakan</label>
                        <input
                            name="image"
                            accept="image/*"
                            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            type="file"/>
                    </div>

                    <!-- <div
                        class="text-left text-red-500 w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                        data-te-input-helper-ref>
                        Jangan masukkan simbol " atau ' kedalam input dibawah
                    </div> -->
                    
                    <!-- waktu_bengkel_kosong-->
                    <div
                        class="relative mb-3"
                        data-te-datepicker-init
                        data-te-inline="true"
                        data-te-disable-past="true"
                        data-te-input-wrapper-init>
                        <input
                            type="text"
                            name="waktu_bengkel_kosong"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            placeholder="Select a date"
                            data-te-datepicker-toggle-ref
                            />
                        <label
                            for="floatingInput"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Waktu Lokasi Tidak Digunakan</label
                        >
                    </div>

                    <!-- id_lokasi -->
                    <div class="relative mb-3">
                        <select name="id_lokasi" data-te-select-init data-te-select-filter="true" required>
                            <option value="0">Lokasi Aset</option>
                            <?php
                                $lokasi_sql = mysqli_query($connect, "SELECT * FROM lokasi ORDER BY nama_lokasi DESC");
                                while($lokasi = mysqli_fetch_array($lokasi_sql)){
                                    ?>
                                    <option value="<?php echo $lokasi['id_lokasi']?>"><?php echo $lokasi['nama_lokasi']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!-- desc_lokasi-->
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
                            >Lokasi Terperinci Aduan
                        </label>
                    </div>

                    <!-- id_aset -->
                    <div class="relative mb-3">
                        <select name="id_aset" data-te-select-init data-te-select-filter="true" required>
                            <option value="0">Jenis Aset</option>
                            <?php
                                $aset_sql = mysqli_query($connect, "SELECT * FROM aset WHERE jenis_aset = 'KOMPUTER'"); 
                                while($aset = mysqli_fetch_array($aset_sql)){
                                    ?>
                                    <option value="<?php echo $aset['id_aset']?>"><?php echo $aset['nama_aset']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <!-- jenis_kepunyaan_aset -->
                    <div class="relative mb-3">
                        <select name="jenis_kepunyaan_aset" data-te-select-init data-te-select-filter="true" required>
                            <option value="0">Jenis Kepunyaan Aset</option>
                            <option value="sumbangan">Sumbangan</option>
                            <option value="persendirian">Persendirian</option>
                            <option value="kerajaan">Hak Milik Kerajaan</option>
                        </select>
                    </div>

                    <!-- nombor_siri_pendaftaran-->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="nombor_siri_pendaftaran_aset"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            placeholder="Name" 
                            required
                            />

                        <label
                            for="exampleInput7"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Nombor Siri Pendaftaran
                        </label>
                    </div>

                    <!-- tarikh_kerosakan-->
                    <div
                        class="relative mb-3"
                        data-te-datepicker-init
                        data-te-inline="true"
                        data-te-input-wrapper-init>
                        <input
                            type="text"
                            name="tarikh_kerosakan"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            placeholder="Select a date"
                            data-te-datepicker-toggle-ref
                            />
                        <label
                            for="floatingInput"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Tarikh Kerosakan</label
                        >
                    </div>
                    

                    <!-- perihal_kerosakan -->
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input
                            name="perihal_kerosakan"
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            placeholder="Name" 
                            id="tableinput"
                            required
                            />

                        <label
                            for="exampleInput7"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Perihal Kerosakan
                        </label>
                    </div>
    
                    <!--Submit button-->
                    <button
                    type="submit"
                    class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    name="submit"
                    data-te-ripple-color="light">
                    Hantar Aduan
                    </button>
                </form>
                
            </div>
            <br>
        </center>
    </div>
    <script>
        document.getElementById('tableinput').addEventListener('input', function(e) {
            var inputText = e.target.value;
            var restrictedChars = /["\\,',]/g;
            if (restrictedChars.test(inputText)) {
                e.target.value = inputText.replace(restrictedChars, '');
            }
        });
    </script>

    <?php $location_index = "../..";include('../../components/footer.php') ?>
</body>
</html>