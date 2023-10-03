-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2023 at 12:25 AM
-- Server version: 10.11.3-MariaDB
-- PHP Version: 8.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `AduanPenyelengaraanKVKS`
--

-- --------------------------------------------------------

--
-- Table structure for table `aduan_kerosakkan_komputer`
--

CREATE TABLE `aduan_kerosakkan_komputer` (
  `id_aduan` int(11) NOT NULL,
  `id_pensyarah` int(11) NOT NULL,
  `waktu_bengkel_kosong` varchar(50) NOT NULL,
  `id_lokasi` int(11) NOT NULL,
  `desc_lokasi` varchar(100) NOT NULL,
  `id_asset` int(11) NOT NULL,
  `jenis_kepunyaan_asset` varchar(50) NOT NULL,
  `nombor_siri_pendaftaran_asset` varchar(70) NOT NULL,
  `tarikh_kerosakkan` varchar(50) NOT NULL,
  `perihal_kerosakkan` text NOT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `kos_penyelengaraan_terdahulu` varchar(50) DEFAULT NULL,
  `kos_penyelengaraan_anggaran` varchar(50) DEFAULT NULL,
  `ulasan_aduan` text DEFAULT NULL,
  `status_aduan` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aduan_kerosakkan_komputer`
--

INSERT INTO `aduan_kerosakkan_komputer` (`id_aduan`, `id_pensyarah`, `waktu_bengkel_kosong`, `id_lokasi`, `desc_lokasi`, `id_asset`, `jenis_kepunyaan_asset`, `nombor_siri_pendaftaran_asset`, `tarikh_kerosakkan`, `perihal_kerosakkan`, `id_admin`, `kos_penyelengaraan_terdahulu`, `kos_penyelengaraan_anggaran`, `ulasan_aduan`, `status_aduan`) VALUES
(1, 1, '2023-09-20', 2, 'sebelah meja guru', 2, 'persendirian', 'K1238239102FJ', '2023-09-11', 'lampu tidak hidup', NULL, '3000', '4000', 'tukar lampu belakang monitor', 2),
(4, 4, '15/09/2023, 03:02 PM', 2, 'di meja 12', 2, 'sumbangan', 'KPM/PBTM/BHA3001/H/16/22', '15/09/2023, 12:00 PM', 'Skrin biru', NULL, '10', '20', 'download driver', 2),
(6, 1, '20/09/2023, 03:00 PM', 3, 'meja 14', 3, 'sumbangan', 'KPM/PBTM/BKA3001/H/54/223', '21/09/2023, 12:00 PM', 'Lampu power supply berkelip tanpa henti', NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `aduan_kerosakkan_umum`
--

CREATE TABLE `aduan_kerosakkan_umum` (
  `id_aduan` int(11) NOT NULL,
  `nama_pelapor` varchar(500) NOT NULL,
  `lokasi_terperinci_aduan` varchar(500) NOT NULL,
  `butiran_kerosakkan` varchar(100) NOT NULL,
  `tarikh_aduan` varchar(50) NOT NULL,
  `tindakkan_teknikal_aduan` varchar(500) DEFAULT NULL,
  `tarikh_tindakkan_aduan` varchar(50) DEFAULT NULL,
  `ulasan_aduan` text DEFAULT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `status_aduan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aduan_kerosakkan_umum`
--

INSERT INTO `aduan_kerosakkan_umum` (`id_aduan`, `nama_pelapor`, `lokasi_terperinci_aduan`, `butiran_kerosakkan`, `tarikh_aduan`, `tindakkan_teknikal_aduan`, `tarikh_tindakkan_aduan`, `ulasan_aduan`, `id_admin`, `status_aduan`) VALUES
(4, 'NUR UMIRAH BT MAMAT', 'sebelah bilik guru melur', 'kerosakkan pintu', '10/10/2023, 12:00 PM', 'tukar pintu tombol', '11/10/2023, 12:00 PM', 'selesai', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `asset`
--

CREATE TABLE `asset` (
  `id_asset` int(11) NOT NULL,
  `nama_asset` varchar(100) NOT NULL,
  `jenis_asset` varchar(100) NOT NULL,
  `status_asset` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`id_asset`, `nama_asset`, `jenis_asset`, `status_asset`) VALUES
(1, 'PRINTER', 'ELEKTRONIK', 1),
(2, 'MONITOR COMPUTER', 'ELEKTRONIK', 1),
(3, 'POWER SUPPLY', 'ELEKTRONIK', 1),
(4, 'PC COMPUTER', 'ELEKTRONIK', 1),
(5, 'KEYBOARD', 'ELEKTRONIK', 1),
(6, 'MOUSE ', 'ELEKTRONIK', 1),
(7, 'PLUG', 'ELEKTRONIK', 1);

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id_lokasi` int(11) NOT NULL,
  `nama_lokasi` varchar(100) NOT NULL,
  `pelan_lantai_img` varchar(200) DEFAULT NULL,
  `status_lokasi` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id_lokasi`, `nama_lokasi`, `pelan_lantai_img`, `status_lokasi`) VALUES
(1, 'LAIN LAIN', NULL, 1),
(2, 'BENGKEL MAKMAL WEB 2', NULL, 1),
(3, 'BENGKEL MAKMAL ANIMASI A', NULL, 1),
(4, 'BENGKEL MAKMAL ANIMASI B', NULL, 1),
(5, 'STUDIO PEMASARAN ', NULL, 1),
(6, 'KOLEJ KEDIAMAN ', NULL, 1),
(7, 'PEJABAT', NULL, 1),
(8, 'BENGKEL MAKMAL WEB 1', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id_pengguna` int(11) NOT NULL,
  `nama_pengguna` varchar(100) NOT NULL,
  `password_pengguna` varchar(100) NOT NULL,
  `status_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id_pengguna`, `nama_pengguna`, `password_pengguna`, `status_pengguna`) VALUES
(6, 'admin', '$2y$10$GceLVxp8qq2JUzpM18HTB.neTEK2hksZI.qvWEjiVHfk0clMFXqA.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pensyarah`
--

CREATE TABLE `pensyarah` (
  `id_pensyarah` int(11) NOT NULL,
  `nama_pensyarah` varchar(100) NOT NULL,
  `jabatan_pensyarah` varchar(100) NOT NULL,
  `status_pensyarah` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pensyarah`
--

INSERT INTO `pensyarah` (`id_pensyarah`, `nama_pensyarah`, `jabatan_pensyarah`, `status_pensyarah`) VALUES
(1, 'MASNI BINTI RAHMAN', 'JABATAN TEKNOLOGI MAKLUMAT', '1'),
(2, 'NUR UMIRAH BT MAMAT', 'JABATAN TEKNOLOGI MAKLUMAT', '1'),
(3, 'NUR SYAZWANI BINTI AHMAD KAMARRUDIN', 'JABATAN TEKNOLOGI MAKLUMAT', '1'),
(4, 'MUHAMAD DANIAL BIN ROSDI', 'JABATAN TEKNOLOGI MAKLUMAT', '1'),
(5, 'NUR SHAKINA BT IBRAHIM', 'JABATAN TEKNOLOGI MAKLUMAT', '');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id_staff` int(11) NOT NULL,
  `nama_staff` varchar(100) NOT NULL,
  `jawatan_staff` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aduan_kerosakkan_komputer`
--
ALTER TABLE `aduan_kerosakkan_komputer`
  ADD PRIMARY KEY (`id_aduan`);

--
-- Indexes for table `aduan_kerosakkan_umum`
--
ALTER TABLE `aduan_kerosakkan_umum`
  ADD PRIMARY KEY (`id_aduan`);

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`id_asset`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id_lokasi`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id_pengguna`);

--
-- Indexes for table `pensyarah`
--
ALTER TABLE `pensyarah`
  ADD PRIMARY KEY (`id_pensyarah`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id_staff`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aduan_kerosakkan_komputer`
--
ALTER TABLE `aduan_kerosakkan_komputer`
  MODIFY `id_aduan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `aduan_kerosakkan_umum`
--
ALTER TABLE `aduan_kerosakkan_umum`
  MODIFY `id_aduan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `asset`
--
ALTER TABLE `asset`
  MODIFY `id_asset` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id_lokasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id_pengguna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pensyarah`
--
ALTER TABLE `pensyarah`
  MODIFY `id_pensyarah` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id_staff` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
