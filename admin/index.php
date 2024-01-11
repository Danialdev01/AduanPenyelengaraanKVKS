<?php $title = "Admin"; $location_index = ".."; include('../components/head.php')?>
<body>
    <?php $location_index = ".."; include('../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        <center>
            <h3 class="text-xl">Admin Dashboard</h3>
            <br>
            <div class="md:flex block justify-center">
                <!-- Aduan Kerosakan peranti elektronink -->
                <div class="p-3">
                    <div
                        class="h-48 text-left max-w-md block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="p-6">
                            <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Aduan Kerosakan Komputer
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Kerosakan Komputer di Kolej Vokasional Kuala Selangor
                            </p>
                            <a href="./aduan-komputer/">
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
                </div>
                <br>
        
                <!-- Aduan Kerosakan Umum -->
                <div class="p-3">
                    <div
                        class="h-48 text-left max-w-md block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="p-6">
                            <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Aduan Kerosakan Umum
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Kerosakan Umum di Kolej Vokasional Kuala Selangor
                            </p>
                            <a href="./aduan-umum/">
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
                </div>
            </div>

            <div class="aduan-kerosakan-aset-alih p-3">
                    <!-- Aduan Kerosakan Penyaman udara -->
                    <div
                        class="h-56 text-left max-w-md block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="p-6">
                            <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Aduan Kerosakan Aset Alih
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Kerosakan Aset Alih di Kolej Vokasional Kuala Selangor
                            </p>
                            <a href="./aduan-aset-alih/">
                                <button
                                    type="button"
                                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Buat Aduan
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            
            
        </center>
        
    </div>

    <?php $location_index = "..";include('../components/footer.php') ?>
</body>
</html>