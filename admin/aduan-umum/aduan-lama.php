<?php $title = "Aduan Lama"; $location_index = "../.."; include('../../components/head.php')?>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin-umum.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <!--Tabs navigation-->
        <ul
            class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
            role="tablist"
            data-te-nav-ref>

            <!-- ADUAN SAH -->
            <li role="presentation" class="flex-auto text-center">
                <a
                href="#tabs-home01"
                class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#tabs-home01"
                data-te-nav-active
                role="tab"
                aria-controls="tabs-home01"
                aria-selected="true"
                >Aduan Sah</a
                >
            </li>

            <!-- ADUAN BATAL -->
            <li role="presentation" class="flex-auto text-center">
                <a
                href="#tabs-profile01"
                class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#tabs-profile01"
                role="tab"
                aria-controls="tabs-profile01"
                aria-selected="false"
                >Aduan Batal</a
                >
            </li>
        </ul>

            <!--Tabs content-->
        <div class="mb-6">

            <!-- Aduan yang telah disahkan -->
            <div
                class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab01"
                data-te-tab-active>
                <div class="aduan-sah">
                    <?php
                        require_once('../../db/config.php');
                        $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakkan_umum WHERE status_aduan = '2'");
                        while($aduan = mysqli_fetch_array($aduan_sql)){
                            ?>
                            <div
                                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div class="p-6">
                                    <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <?php
                                        echo $aduan['butiran_kerosakkan'];
                                    ?>
                                    </h5>
                                    <p class="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                                    <?php
                                        echo $aduan['tarikh_aduan']
                                    ?>
                                    </p>
                                    <p class="mb-4 text-base text-green-600 dark:text-neutral-200">
                                    <?php
                                        echo $aduan['ulasan_aduan']
                                    ?>
                                    </p>
                                    <a href="./lihat-surat.php?id_aduan=<?php echo $aduan['id_aduan'] ?>">
                                        <button
                                            type="button"
                                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Lihat Laporan
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <br>
                            <?php
                        }
                    ?>
                </div>
            </div>

            <!-- Aduan yang telah batal -->
            <div
                class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile01"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab01">
                    <div class="aduan-batal">
                        <?php
                            require_once('../../db/config.php');
                            $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakkan_umum WHERE status_aduan = '0'");
                            while($aduan = mysqli_fetch_array($aduan_sql)){
                                ?>
                                <div
                                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div class="p-6">
                                        <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        <?php
                                            $id_asset = $aduan['id_asset'];
                                            $asset_sql = mysqli_query($connect, "SELECT nama_asset FROM asset WHERE id_asset = '$id_asset'");
                                            $asset = mysqli_fetch_array($asset_sql);
                                            echo "Permasalahan " . $asset['nama_asset'];
                                        ?>
                                        </h5>
                                        <p class="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                                        <?php
                                            echo $aduan['tarikh_kerosakkan']
                                        ?>
                                        </p>
                                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        <?php
                                            echo $aduan['perihal_kerosakkan']
                                        ?>
                                        </p>
                                        <a href="./lihat-surat.php?id_aduan=<?php echo $aduan['id_aduan'] ?>">
                                            <button
                                                type="button"
                                                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Lihat Laporan
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <br>
                                <?php
                            }
                        ?>
                    </div>
            </div>

        </div>
        
    </div>

    <?php include('../../components/footer.php') ?>
</body>
</html>