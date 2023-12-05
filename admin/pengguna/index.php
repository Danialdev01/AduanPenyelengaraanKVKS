<?php $title = "Pengguna"; $location_index = "../.."; include('../../components/head.php')?>
<script src="../../dist/tw-elements.umd.min.js"></script>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <div class="aduan-container">
            <!--Tabs navigation-->
            <ul
                class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation" class="flex-auto text-center">
                    <a
                    href="#tabs-aduan-terkini"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-aduan-terkini"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-aduan-terkini"
                    aria-selected="true"
                    >Kakitangan KVKS</a
                    >
                </li>
                <li role="presentation" class="flex-auto text-center">
                    <a
                    href="#tabs-aduan-sah"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-aduan-sah"
                    role="tab"
                    aria-controls="tabs-aduan-sah"
                    aria-selected="false"
                    >Admin</a
                    >
                </li>
            </ul>

            <!--Tabs content-->
            <div class="mb-6">
                <div
                    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-aduan-terkini"
                    role="tabpanel"
                    aria-labelledby="tabs-aduan-terkini-tab01"
                    data-te-tab-active>
                    <?php include('./jenis_pengguna/kakitangankvks.php') ?>
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-aduan-sah"
                    role="tabpanel"
                    aria-labelledby="tabs-aduan-sah-tab01">
                    <?php include('./jenis_pengguna/pegawai-teknikalkvks.php') ?>
                </div>
            </div>
        </div>
        
    </div>

    <?php $location_index = "../..";include('../../components/footer.php') ?>
</body>
</html>