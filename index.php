<?php $title = "eAduan Penyelenggaraan KV Kuala Selangor"; $location_index = "."; include('./components/head.php')?>
<?php     
    if(isset($_COOKIE['isLoginCookie'])){
        if($_COOKIE['isLoginCookie'] == 3){
            $_SESSION['isLoggedIn'] = 3;
            header("location:./pengguna");
        }
    }
?>
<body>
    <style>
        
        body {
            background: linear-gradient(-45deg, #2ecc7d,#302bc2, #1c9dcc, #3535c2);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            height: 100vh;
        }

        @keyframes gradient {
            0% {
                background-position: 20% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 20% 50%;
            }
        }
        </style>
    <?php $location_index = "."; include('./components/login-header.php') ?>
    <?php $dir_location="."; include('./components/captcha.php') ?>
    <center>
        <section>
            <div class="main-container block lg:flex">
                <div class="container p-2 text-left">
                    <div class="text hidden lg:block" style="padding: 5%;padding-left:6%">
                        <br><br><br>
                        <center>
                            <h1 class="text-left text-white mt-6 font-bold"><span style="font-size: 3rem;">ePenyelenggaraan</span> <br> <span style="font-size: 3.5rem;">KV Kuala Selangor</span></h1>
                        </center>
                    </div>
                </div>
                <div class="container p-2">
                    <br><br>
                    <h3 class="text-3xl font-bold text-white">
                        Log Masuk
                    </h3>
                    <br><br>
                    <div
                        class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <form method="post" action="./system/check-login-kakitangankvks.php">
                            <!--Nama Pengguna-->
                            <div class="relative mb-6 mt-4 rounded bg-white">
                                <select style="z-index:-100 !important" name="id_kakitangan" class="rounded-md bg-white" data-te-select-init data-te-select-filter="true" required>
                                    <option value="0">Nama Pengguna</option>
                                    <?php
                                        require_once("./db/config.php");
                                        $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks WHERE status_kakitangan = '1' ORDER BY nama_kakitangan ASC");
                                        while($kakitangan = mysqli_fetch_array($kakitangan_sql)){
                                            ?>
                                            <option value="<?php echo $kakitangan['id_kakitangan']?>"><?php echo $kakitangan['nama_kakitangan']?></option>
                                            <?php
                                        }
                                    ?>
                                </select>
                            </div>
                            
                            <div class="back-link mb-4 text-center">
                                <a style="color: #0048ff" href="./admin-login.php"><u>Admin</u></a>
                            </div>
                            
            
                            <!--Sign in button-->
                            <button
                                type="submit"
                                name="login"
                                style="background-color:#0013c7"
                                class="hover:bg-pink-800 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Hantar Aduan
                            </button>
            
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
        <section class="features">
                <div class="container md:px-6">

                    <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
                        <div class="mb-12 lg:mb-0">
                            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-black shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold text-white">Mudah Digunakan</h5>
                            <p class="text-white">
                            Penghantaran aduan kerosakan kepada pegawai teknikal hanya dihujung jari.
                            </p>
                        </div>


                        <div class="mb-12 md:mb-0">
                            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-black shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold text-white">Pantas</h5>
                            <p class="text-white">
                            Aduan kerosakan yang diterima akan dapat diselesaikan dengan secepat yang mungkin.
                            </p>
                        </div>

                        <div class="mb-12 md:mb-0">
                            <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-black shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold text-white">Aduan Berpusat</h5>
                            <p class="text-white">
                            Rekod aduan dan penyelenggaraan secara sistematik dan berpusat.
                            </p>
                        </div>
                    </div>
                    <br><br><br><br><br>
                <!-- Section: Design Block -->
                </div>
                <!-- Container for demo purpose -->
        </section>
    </center>

    <?php $location_index = ".";include('./components/footer.php') ?>
</body>
</html>