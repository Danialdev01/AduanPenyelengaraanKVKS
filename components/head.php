<!DOCTYPE html>

<html lang="en" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="<?php echo $location_index?>/src/assets/images/logo-1.png" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo $location_index?>/dist/output.css">

    <title><?php echo $title ?></title>
    
    <!-- tailwind -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" />
    <style>
        input{
          color: black !important;
        }
    </style>

    <!-- SEO  -->
    <meta name="title" content="ePenyelenggaraan KVKS"></meta>
    <meta name="description" content="Sistem ePenyelengaraan adalah sebuah sistem yang membolehkan para warga kolej vokasional mengadukan permasalahan sekitar."></meta>

    <style>
      .main-container{
        min-height: 100dvh;
      }
    </style>
    <?php session_start() ?>
</head>

