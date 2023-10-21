<?php $title = "Semua aset"; $location_index = "../.."; include('../../components/head.php')?>
<body>
    <?php $location_index = "../.."; include('../../components/header-admin.php') ?>
    
    <div class="main-container p-2">
        <br><br>
        
        <center>
            <div class="semua-aset max-w-2xl">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Bil</th>
                                        <th scope="col" class="px-6 py-4">Nama</th>
                                        <th scope="col" class="px-6 py-4">Jenis</th>
                                        <th scope="col" class="px-6 py-4">Kemaskini</th>
                                        <th scope="col" class="px-6 py-4">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <?php
                                        require_once('../../db/config.php');

                                        $aset_sql = mysqli_query($connect, "SELECT * FROM aset");
                                        $i = 0;
                                        while($aset = mysqli_fetch_array($aset_sql)){
                                            $i += 1;
                                            ?>

                                            <tr
                                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium"><?php echo $i ?></td>
                                                <td class="whitespace-nowrap px-6 py-4"><?php echo $aset['nama_aset']?></td>
                                                <td class="whitespace-nowrap px-6 py-4"><?php echo $aset['jenis_aset']?></td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <a href="">
                                                        <button class="bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white rounded-sm">Kemaskini</button>
                                                    </a>
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <a href="">
                                                        <button class="bg-red-500 hover:bg-red-600 px-3 py-1 text-white rounded-sm">Delete</button>
                                                    </a>
                                                </td>
                                            </tr>

                                            <?php
                                        }
                                    ?>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
        <br><br>

        <div class="button-add-aset">
            <a href="./tambah-aset.php">
                <button class="fixed bg-black text-white h-10 w-10 text-2xl" style="border-radius:50%;right:10vw;bottom:10vh">+</button>
            </a>
        </div>
    </div>

    <?php include('../../components/footer.php') ?>
</body>
</html>