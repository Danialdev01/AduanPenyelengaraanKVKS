<div class="aduan-kerosakan-komputer">
    <?php
        $id_kakitangan = $_SESSION['idKakitangan'];
        $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE id_kakitangan = '$id_kakitangan'");
        $kakitangan = mysqli_fetch_array($kakitangan_sql);

        $nama_kakitangan = $kakitangan['nama_kakitangan'];
        $aduan_kerosakan_umum_sql = mysqli_query($connect, "SELECT * FROM aduan_kerosakan_umum WHERE nama_pelapor = '$nama_kakitangan'");
        while($aduan_kerosakan_umum = mysqli_fetch_array($aduan_kerosakan_umum_sql)){
            ?>
            <div class="p-1 md:w-3/4 w-full">
                <div class="md:flex block text-left block w-3/4 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="w-full">
                        <h5
                            class="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            <?php 
                                echo $aduan_kerosakan_umum['butiran_kerosakan'] . " (Kerosakan Umum)";
                            ?>
                        </h5>
                        <p class="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                            <?php echo $aduan_kerosakan_komputer['perihal_kerosakan'] ?>
                        </p>
                        <button
                            type="button"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Lihat Aduan
                        </button>
                    </div>
                    <div class="pt-5 md:pt-0">
                        <?php 
                            $status_aduan = $aduan_kerosakan_komputer['status_aduan'];
                            if($status_aduan == 0){echo '<p class="text-red-500 text-sm whitespace-nowrap">Telah Dibatalkan</p>';}
                            else if($status_aduan == 1){echo '<p class="text-cyan-700 text-sm whitespace-nowrap">Sedang Diproses</p>';}
                            else if($status_aduan == 2){echo '<p class="text-green-500 text-sm whitespace-nowrap">Telah Disahkan</p>';}
                            else{echo "Error";}
                        ?>
                    </div>
                </div>                        
            </div>
            <br>
            <?php
        }
    ?>
</div>