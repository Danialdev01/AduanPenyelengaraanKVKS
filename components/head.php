<!DOCTYPE html>

<?php
  // $theme page (color)
    if($_SESSION['theme'] == "dark"){
      $theme = "dark";
    }
    else if($_SESSION['theme'] == "light"){
      $theme = "light";
    }
    else{
      // default
      $theme = "light";
    }
?>
<html lang="en" class="<?php echo $theme ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="<?php echo $location_index?>/src/assets/images/logo.png" type="image/x-icon">
    <!-- <link rel="stylesheet" href="<?php echo $location_index?>/src/assets/css/main.css"> -->

    <title><?php echo $title ?></title>
    
    <!-- tailwind -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
      rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" />
    <script src="https://cdn.tailwindcss.com/3.3.0"></script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          fontFamily: {
            sans: ["Roboto", "sans-serif"],
            body: ["Roboto", "sans-serif"],
            mono: ["ui-monospace", "monospace"],
          },
        },
        corePlugins: {
          preflight: false,
        },
      };
    </script>
</head>

