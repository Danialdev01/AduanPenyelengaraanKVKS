<?php $title = "Login"; $location_index = "."; include('./components/head.php')?>
<?php 
    if(isset($_SESSION['isLoggedIn']) || isset($_COOKIE['isLoginCookie'])){
        if($_SESSION['isLoggedIn'] == 2 || $_COOKIE['isLoginCookie'] == 2){header("location:./admin");}
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
        <div class="main-container p-2">
            <br><br>
            <div
                class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form method="post" action="./system/check-login-admin.php">
                    <!--Nama Pengguna-->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            required
                            name="nama_pegawai"
                            type="text"
                            class="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
                        <label
                            for="exampleInputEmail2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Nama Penguna</label
                        >
                    </div>

                    <!--Password input-->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            required
                            name="password"
                            type="password"
                            class="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputPassword2"
                            placeholder="Password" />
                        <label
                            for="exampleInputPassword2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Kata Laluan Pengguna</label
                        >
                    </div>

                    <input type="hidden" name="h_code" value="<?php print $code; ?>"><span class="captcha"><?php print $code; ?></span><br><br>

                    <!-- Captcha  -->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            name="captcha"
                            required
                            type="text"
                            class="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInputEmail2"
                            aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <label
                            for="exampleInputEmail2"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Masukkan Captcha</label
                        >
                    </div>
                    <div class="back-link text-center">
                        <a style="color: #0048ff;" href="./"><u>Kembali</u></a>
                    </div>
                    <br>
    
                    <!--Sign in button-->
                    <button
                        style="background-color:#0013c7;"
                        type="submit"
                        name="login"
                        class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Log Masuk
                    </button>
    
                </form>
            </div>
        </div>
    </center>

    <?php $location_index = ".";include('./components/footer.php') ?>
</body>
</html>