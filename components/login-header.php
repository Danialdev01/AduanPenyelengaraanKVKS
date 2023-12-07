<nav
  style="z-index: 9999;"
  class=" z-[1300] sticky top-0 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <a
        class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="<?php echo $location_index?>/">
        <img
          class="mr-2 w-40 md:w-48 md:52"
          src="<?php echo $location_index?>/src/assets/images/logo-banner-1.png"
          alt="Logo"
          loading="lazy" />
      </a>
    </div>

    <!-- Hamburger button for mobile view -->
    <!-- <button
      class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent4"
      aria-controls="navbarSupportedContent4"
      aria-expanded="false"
      aria-label="Toggle navigation">
      Hamburger icon
      <span class="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button> -->

    <!-- Collapsible navbar container -->
    <div
      class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent4"
      data-te-collapse-item>
      <!-- Left links -->
      <ul
      class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
      data-te-navbar-nav-ref>
        <?php if($location_index != "."){ ?>
        <!-- Aduan Komputer -->
        <li
          class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
          <a
            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            aria-current="page"
            href="<?php echo $location_index?>/aduan-komputer"
            data-te-nav-link-ref
            >Kerosakan Komputer</a
          >
        </li>

        <!-- Aduan Umum -->
        <li
          class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
          data-te-nav-item-ref>
          <a
            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            aria-current="page"
            href="<?php echo $location_index?>/aduan-umum"
            data-te-nav-link-ref
            >Kerosakan Umum</a
          >
        </li>
        <?php }?>
      </ul>

    </div>
  </div>
</nav>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>

<?php
  if(isset($_SESSION['prompt'])){
  $prompt = $_SESSION['prompt'];
  if($prompt != ""){
      echo '<div style="z-index:10000" class="justify-center flex"><div
  class="fixed z-40 top-24 pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
  id="static-example"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  data-te-autohide="false"
  data-te-toast-init
  data-te-toast-show>
  <div
    class="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-100 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
    <p class="flex items-center font-bold text-danger-700">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times-circle"
        class="mr-2 h-4 w-4 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
      </svg>
      Log Masuk
    </p>
    <div class="flex items-center">
      <button
        type="button"
        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        data-te-toast-dismiss
        aria-label="Close">
        <span
          class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>
    </div>
  </div>
  <div
    class="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700">
    '. $prompt .'
  </div>
</div></div>';
  }
  $_SESSION['prompt'] = "";
  }
?>