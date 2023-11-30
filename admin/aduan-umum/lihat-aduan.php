<?php $title = "Lihat Aduan"; $location_index = ".../.."; include('../../components/head.php')?>
<?php 
    require_once('../../db/config.php');
    $id_aduann = $_GET['id_aduan'];

    $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE id_aduan = '$id_aduann' ");
    $aduan = mysqli_fetch_array($aduan_sql);

?>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br>
        <center>
            <form action="./system/sahkan-aduan.php" method="post">
                <div class="lihat-aduan-container block md:flex">
                    <!-- Data aduan dari pengguna -->
                    <div class="w-full text-left" style="padding-left: 5%;padding-right:5%">
                        <div
                            class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div>
                                
                                <?php 
                                    if($aduan['nama_img_ref'] != "" || $aduan['nama_img_ref'] != NULL){
                                        ?>
                                        <!-- Gambar kerosakan -->
                                        <div class="relative mb-6">
                                            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                                <img
                                                class="rounded-lg aspect-video w-full"
                                                src="../../pengguna/aduan-umum/system/uploads/<?php echo $aduan['nama_img_ref'] ?>"
                                                alt="" />
                                            </div>
                                        </div>
                                        <?php
                                    }
                                ?>
        
                                <!--Nama Pelapor-->
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        value="<?php echo $aduan['nama_pelapor'] ?>"
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="text"
                                        readonly />
                                    <label
                                        for="exampleInput125"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                        >Nama Pelapor
                                    </label>
                                </div>
                                
                                <!-- Lokasi Terperinci Aduan-->
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        value="<?php echo $aduan['lokasi_terperinci_aduan'] ?>"
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="text" 
                                        readonly/>
                                    <label
                                        for="exampleInput125"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                        >Lokasi Terperinci Aduan
                                    </label>
                                </div>

                                <!-- Butiran Kerosakan-->
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        value="<?php echo $aduan['butiran_kerosakan'] ?>"
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="text" 
                                        readonly/>
                                    <label
                                        for="exampleInput125"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                        >Butiran Kerosakan
                                    </label>
                                </div>

                               
   
                                <!-- Tarikh Kerosakan-->
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        value="<?php echo $aduan['tarikh_aduan'] ?>"
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="text"
                                        readonly />
                                    <label
                                        for="exampleInput125"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                        >Tarikh Aduan
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>

                    <!-- Data aduan dari admin -->
                    <div class="w-full text-left" style="padding-left: 5%;padding-right:5%">
                        <div
                            class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div>
                                
                                <div
                                    class="relative mb-3"
                                    data-te-datepicker-init
                                    data-te-inline="true"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name="tarikh_tindakan_aduan"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Select a date"
                                        data-te-datepicker-toggle-ref
                                        />
                                    <label
                                        for="floatingInput"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Tarikh Tindakan Aduan</label
                                    >
                                </div>

                                <!-- Ulasan Aduan -->
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        name="ulasan_aduan"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea13"
                                        rows="3"
                                        placeholder="Message"
                                        required></textarea>
                                    <label
                                        for="exampleFormControlTextarea13"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Ulasan Aduan
                                    </label>
                                </div>
                                <input type="hidden" name="id_aduan" value="<?php echo $id_aduann ?>">
        
                                <!--Submit button-->
                                <button
                                    type="submit"
                                    class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sahkan Aduan
                                </button>

                                <br><br>
                                <a href="./system/batal-aduan.php?id_aduan=<?php echo $id_aduann ?>">
                                <center>
                                    <div 
                                        class="inline-block w-full rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        data-te-ripple-color="light">
                                        Batalkan Aduan
                                    </div>
                                </center>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </center>
    </div>

    <?php $location_index = "../..";include('../../components/footer.php') ?>
</body>
</html>