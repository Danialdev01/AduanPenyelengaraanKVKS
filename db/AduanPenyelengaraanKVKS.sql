-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 09, 2023 at 01:24 AM
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
-- Table structure for table `aduan_kerosakan_komputer`
--

CREATE TABLE `aduan_kerosakan_komputer` (
  `id_aduan` int(11) NOT NULL,
  `id_kakitangan` int(11) NOT NULL,
  `waktu_bengkel_kosong` varchar(50) NOT NULL,
  `id_lokasi` int(11) NOT NULL,
  `desc_lokasi` varchar(100) NOT NULL,
  `id_aset` int(11) NOT NULL,
  `jenis_kepunyaan_aset` varchar(50) NOT NULL,
  `nombor_siri_pendaftaran_aset` varchar(70) NOT NULL,
  `tarikh_kerosakan` varchar(50) NOT NULL,
  `perihal_kerosakan` text NOT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `nama_img_ref` varchar(100) DEFAULT NULL,
  `kos_penyelengaraan_terdahulu` varchar(50) DEFAULT NULL,
  `kos_penyelengaraan_anggaran` varchar(50) DEFAULT NULL,
  `ulasan_aduan` text DEFAULT NULL,
  `status_aduan` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aduan_kerosakan_komputer`
--

INSERT INTO `aduan_kerosakan_komputer` (`id_aduan`, `id_kakitangan`, `waktu_bengkel_kosong`, `id_lokasi`, `desc_lokasi`, `id_aset`, `jenis_kepunyaan_aset`, `nombor_siri_pendaftaran_aset`, `tarikh_kerosakan`, `perihal_kerosakan`, `id_admin`, `nama_img_ref`, `kos_penyelengaraan_terdahulu`, `kos_penyelengaraan_anggaran`, `ulasan_aduan`, `status_aduan`) VALUES
(4, 4, '15/09/2023, 03:02 PM', 2, 'di meja 12', 2, 'sumbangan', 'KPM/PBTM/BHA3001/H/16/22', '21/09/2023, 12:00 PM', 'Skrin biru', 9, '', '10', '20', 'download driver', 2),
(6, 1, '20/09/2023, 03:00 PM', 3, 'meja 14', 1, 'sumbangan', 'KPM/PBTM/BKA3001/H/54/223', '21/09/2023, 12:00 PM', 'Lampu power supply berkelip tanpa henti', 9, '', '500', '300', 'tukar powersupply', 2),
(8, 5, '14/10/2023, 03:00 AM', 3, 'meja guru', 3, 'sumbangan', 'KPM/PBTM/BHA3001/H/16/20', '13/10/2023, 02:00 PM', 'Power supply berbunyi', 9, '', NULL, NULL, NULL, 0),
(14, 1, '25/11/2023, 12:00 PM', 7, 'tingkat 1', 3, 'persendirian', '5445', '26/10/2023, 12:00 PM', 'ffhg', 9, '', NULL, NULL, NULL, 0),
(15, 6, '11/11/2023, 12:00 PM', 3, 'Meja kanan', 1, 'persendirian', 'kpdasd', '01/11/2023, 12:00 PM', 'Printer tidak mengeluarkan warna', 9, '', NULL, NULL, NULL, 0),
(16, 6, '11/11/2023, 12:00 PM', 3, 'Meja kananasd', 1, 'persendirian', 'kpdasd', '01/11/2023, 12:00 PM', 'Printer tidak mengeluarkan warnaasdas', 9, '', '12312', '12312', 'asdasd', 2),
(25, 6, '09/11/2023, 12:00 PM', 4, 'asdas', 3, 'sumbangan', 'asdasdas', '16/11/2023, 12:00 PM', 'asdasd', 6, '654ad5328b7b3.org', NULL, NULL, NULL, 1),
(26, 6, '17/11/2023, 12:00 PM', 8, 'asdasd', 4, 'kerajaan', 'asdasdas', '22/11/2023, 12:00 PM', 'asdasd', 6, '654ad64b458fd.jpg', '12323', '12312', 'thinga', 2);

-- --------------------------------------------------------

--
-- Table structure for table `aduan_kerosakan_umum`
--

CREATE TABLE `aduan_kerosakan_umum` (
  `id_aduan` int(11) NOT NULL,
  `nama_pelapor` varchar(500) NOT NULL,
  `lokasi_terperinci_aduan` varchar(500) NOT NULL,
  `butiran_kerosakan` varchar(100) NOT NULL,
  `tarikh_aduan` varchar(50) NOT NULL,
  `tindakan_teknikal_aduan` varchar(500) DEFAULT NULL,
  `tarikh_tindakkan_aduan` varchar(50) DEFAULT NULL,
  `ulasan_aduan` text DEFAULT NULL,
  `id_admin` int(11) DEFAULT NULL,
  `nama_img_ref` varchar(100) NOT NULL,
  `status_aduan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aduan_kerosakan_umum`
--
-- --------------------------------------------------------

--
-- Table structure for table `aset`
--

CREATE TABLE `aset` (
  `id_aset` int(11) NOT NULL,
  `nama_aset` varchar(100) NOT NULL,
  `jenis_aset` varchar(100) NOT NULL,
  `status_aset` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aset`
--

INSERT INTO `aset` (`id_aset`, `nama_aset`, `jenis_aset`, `status_aset`) VALUES
(1, 'PRINTER', 'KOMPUTER', 1),
(2, 'MONITOR COMPUTER', 'KOMPUTER', 1),
(3, 'POWER SUPPLY', 'KOMPUTER', 1),
(4, 'PC COMPUTER', 'KOMPUTER', 1),
(5, 'KEYBOARD', 'KOMPUTER', 1),
(6, 'MOUSE ', 'KOMPUTER', 1),
(7, 'PLUG', 'ELEKTRONIK', 1),
(8, '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `kakitangankvks`
--

CREATE TABLE `kakitangankvks` (
  `id_kakitangan` int(11) NOT NULL,
  `nama_kakitangan` varchar(100) NOT NULL,
  `jawatan_kakitangan` varchar(100) NOT NULL,
  `ic_kakitangan` varchar(15) NOT NULL,
  `status_kakitangan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kakitangankvks`
--

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
(2, 'BENGKEL WEB 2', NULL, 1),
(3, 'BENGKEL ANIMASI A', NULL, 1),
(4, 'BENGKEL ANIMASI B', NULL, 1),
(5, 'STUDIO PEMASARAN ', NULL, 1),
(6, 'KOLEJ KEDIAMAN ', NULL, 1),
(7, 'PEJABAT', NULL, 1),
(8, 'BENGKEL WEB 1', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pegawai_teknikal`
--

CREATE TABLE `pegawai_teknikal` (
  `id_pegawai` int(11) NOT NULL,
  `nama_pegawai` varchar(100) NOT NULL,
  `password_pegawai` varchar(100) NOT NULL,
  `jawatan_pegawai` varchar(100) NOT NULL,
  `status_pegawai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pegawai_teknikal`
--
--
-- Indexes for dumped tables
--

--
-- Indexes for table `aduan_kerosakan_komputer`
--
ALTER TABLE `aduan_kerosakan_komputer`
  ADD PRIMARY KEY (`id_aduan`);

--
-- Indexes for table `aduan_kerosakan_umum`
--
ALTER TABLE `aduan_kerosakan_umum`
  ADD PRIMARY KEY (`id_aduan`);

--
-- Indexes for table `aset`
--
ALTER TABLE `aset`
  ADD PRIMARY KEY (`id_aset`);

--
-- Indexes for table `kakitangankvks`
--
ALTER TABLE `kakitangankvks`
  ADD PRIMARY KEY (`id_kakitangan`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id_lokasi`);

--
-- Indexes for table `pegawai_teknikal`
--
ALTER TABLE `pegawai_teknikal`
  ADD PRIMARY KEY (`id_pegawai`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aduan_kerosakan_komputer`
--
ALTER TABLE `aduan_kerosakan_komputer`
  MODIFY `id_aduan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `aduan_kerosakan_umum`
--
ALTER TABLE `aduan_kerosakan_umum`
  MODIFY `id_aduan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `aset`
--
ALTER TABLE `aset`
  MODIFY `id_aset` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `kakitangankvks`
--
ALTER TABLE `kakitangankvks`
  MODIFY `id_kakitangan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id_lokasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pegawai_teknikal`
--
ALTER TABLE `pegawai_teknikal`
  MODIFY `id_pegawai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
