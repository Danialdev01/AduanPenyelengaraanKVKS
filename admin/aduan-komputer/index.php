<?php $title = "Dashboard"; $location_index = "../.."; include('../../components/head.php')?>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin-komputer.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <center>
            <h1>Aduan Terkini</h1>
            <br>
        </center>
        <div class="aduan-container">
            <?php
                require_once('../../db/config.php');
                $aduan_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakkan_komputer WHERE status_aduan = '1'");
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
                            <a href="./lihat-aduan.php?id_aduan=<?php echo $aduan['id_aduan'] ?>">
                                <button
                                    type="button"
                                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Lihat Aduan
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

    <?php include('../../components/footer.php') ?>
</body>
</html>