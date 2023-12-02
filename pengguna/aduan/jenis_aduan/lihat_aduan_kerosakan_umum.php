<?php
    $aduan_umum_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE id_aduan = '$id_aduan'");
    $aduan_umum = mysqli_fetch_array($aduan_umum_sql);
?>

<div class="w-full text-left" style="padding-left: 5%;padding-right:5%">
    <center>
        <div
            class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div>
    
                <!-- Gambar kerosakan -->
                <?php 
                if($aduan_umum['nama_img_ref'] != NULL || $aduan_umum['nama_img_ref'] != ""){
                    ?>
                    <div class="relative  mb-6">
                        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <img
                            class="rounded-lg aspect-video w-full"
                            src="../../pengguna/aduan-umum/system/uploads/<?php echo $aduan_umum['nama_img_ref'] ?>"
                            alt="" />
                        </div>
                    </div>
                    <?php
                }
                ?>
    
                <!--lokasi terperinci aduan-->
                <div class="relative mb-6" data-te-input-wrapper-init>
                    
                    <input
                        value="<?php echo $aduan_umum['lokasi_terperinci_aduan'] ?>"
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="text"
                        readonly />
                    <label
                        for="exampleInput125"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Lokasi Terperinci Aduan
                    </label>
                </div>
                
                
    
                <!-- Tarikh aduan-->
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        value="<?php echo $aduan_umum['tarikh_aduan'] ?>"
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="text" 
                        readonly/>
                    <label
                        for="exampleInput125"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Tarikh Aduan
                    </label>
                </div>

                <!-- Butiran kerosakan-->
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        value="<?php echo $aduan_umum['butiran_kerosakan'] ?>"
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
    
                <div style="background-color: blue;" class="button bg-blue-700 rounded text-white p-2"><a href="./"><button>Kembali Kepada Halaman Aduan</button></a></div>
            </div>
        </div>
    </center>
    <br>
</div>