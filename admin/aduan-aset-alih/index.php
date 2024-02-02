<?php $title = "Kerosakan Aset Alih"; $location_index = "../.."; include('../../components/head.php')?>
<script src="../../dist/tw-elements.umd.min.js"></script>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br>
        <div class="aduan-container">
            <!--Tabs navigation-->
            <ul
                class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                role="tablist"
                data-te-nav-ref>
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
                    >Aduan terkini</a
                    >
                </li>
                <li role="presentation" class="flex-auto text-center">
                    <a
                    href="#tabs-profile01"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile01"
                    role="tab"
                    aria-controls="tabs-profile01"
                    aria-selected="false"
                    >Aduan yang telah disahkan</a
                    >
                </li>
                <li role="presentation" class="flex-auto text-center">
                    <a
                    href="#tabs-messages01"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-messages01"
                    role="tab"
                    aria-controls="tabs-messages01"
                    aria-selected="false"
                    >Aduan yang telah dibatalkan</a
                    >
                </li>
            </ul>

            <!--Tabs content-->
            <div class="mb-6">
                <div
                    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-home01"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab01"
                    data-te-tab-active>
                    <?php include('./type_aduan/aduan-terkini.php') ?>
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-profile01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    <?php include('./type_aduan/aduan-sah.php') ?>
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-messages01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    <?php include('./type_aduan/aduan-batal.php') ?>
                </div>
            </div>
        </div>
    </div>

    <?php $location_index = "../..";include('../../components/footer.php') ?>
</body>
</html>