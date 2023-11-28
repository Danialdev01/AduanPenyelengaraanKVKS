<?php $title = "Login"; $location_index = "."; include('./components/head.php')?>
<body>
    <?php $location_index = "."; include('./components/login-header.php') ?>
    <?php $dir_location="."; include('./components/captcha.php') ?>
    <center>
        <div class="main-container p-2">
            <br>
            <h3 class="text-2xl font-bold">
                Log Masuk
            </h3>
            <br><br>
            <div
                class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form method="post" action="./system/check-login-kakitangankvks.php">

                    <!--Nama Pengguna-->
                    <div class="relative mb-6">
                        <select name="id_kakitangan" data-te-select-init data-te-select-filter="true" required>
                            <option>Nama Pengguna</option>
                            <?php
                                require_once("./db/config.php");
                                $kakitangan_sql = mysqli_query($connect, "SELECT * FROM kakitangankvks ORDER BY nama_kakitangan ASC");
                                while($kakitangan = mysqli_fetch_array($kakitangan_sql)){
                                    ?>
                                    <option value="<?php echo $kakitangan['id_kakitangan']?>"><?php echo $kakitangan['nama_kakitangan']?></option>
                                    <?php
                                }
                            ?>
                        </select>
                    </div>

                    <div class="back-link text-left">
                        <a style="color: #0048ff;" href="./admin-login.php"><u>Admin</u></a>
                    </div>
                    <br>
    
                    <!--Sign in button-->
                    <button
                        type="submit"
                        name="login"
                        class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Sign in
                    </button>
    
                </form>
            </div>
        </div>
    </center>

    <?php $location_index = ".";include('./components/footer.php') ?>
</body>
</html>