-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 08 2022 г., 10:10
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `std_1408_kis`
--

-- --------------------------------------------------------

--
-- Структура таблицы `aircrafts`
--

CREATE TABLE `aircrafts` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8_bin NOT NULL,
  `MakeModel` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `TotalSeats` int(11) NOT NULL,
  `EconomySeats` int(11) NOT NULL,
  `BusinessSeats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `aircrafts`
--

INSERT INTO `aircrafts` (`ID`, `Name`, `MakeModel`, `TotalSeats`, `EconomySeats`, `BusinessSeats`) VALUES
(1, 'Boeing 738', 'B738-1950', 176, 162, 12),
(2, 'Boeing 739', 'B739-1954', 169, 96, 51);

-- --------------------------------------------------------

--
-- Структура таблицы `airports`
--

CREATE TABLE `airports` (
  `ID` int(11) NOT NULL,
  `CountryID` int(11) NOT NULL,
  `IATACode` varchar(3) COLLATE utf8_bin NOT NULL,
  `Name` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `airports`
--

INSERT INTO `airports` (`ID`, `CountryID`, `IATACode`, `Name`) VALUES
(2, 185, 'AUH', 'Abu Dhabi'),
(3, 52, 'CAI', 'Cairo'),
(4, 13, 'BAH', 'Bahrain'),
(5, 194, 'ADE', 'Aden'),
(6, 142, 'DOH', 'Doha'),
(7, 152, 'RUH', 'Riyadh');

-- --------------------------------------------------------

--
-- Структура таблицы `a_hobart`
--

CREATE TABLE `a_hobart` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `a_zhidov`
--

CREATE TABLE `a_zhidov` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` varchar(150) DEFAULT NULL,
  `LogTime` varchar(150) DEFAULT NULL,
  `LogOutTime` varchar(150) DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `a_zhidov`
--

INSERT INTO `a_zhidov` (`Name`, `Date`, `LogTime`, `LogOutTime`, `TimeSpendOne`, `Reason`, `TimeSpend`, `Crashes`) VALUES
('a_zhidov@outlook.com1', '10.11.2022', '13:01:15', '13:11:32', 0, 'test', 0, 1),
('a_zhidov@outlook.com1', '10.11.2022', '13:12:03', '13:12:05', 0, 'test1', 0, 1),
('a_zhidov@outlook.com1', '13.11.2022', '15:43:49', '16:17:13', 0, 'test', 0, 0),
('a_zhidov@outlook.com1', '13.11.2022', '16:17:22', '16:20:47', 0, 'No error', 0, 0),
('a_zhidov@outlook.com1', '13.11.2022', '16:21:35', '16:22:04', 0, 'No error', 0, 0),
('a_zhidov@outlook.com1', '13.11.2022', '16:23:16', '16:23:30', 0, 'No error', 0, 0),
('a_zhidov@outlook.com1', '13.11.2022', '16:25:58', '16:26:59', 0, 'No error', 0, 0),
('a_zhidov@outlook.com1', '13.11.2022', '16:25:58', '16:30:06', 5, 'No error', 0, 0),
('a_zhidov@outlook.com12', '17.11.2022', '17:26:32', '17:26:33', 1, 'No error', 0, 0),
('a_zhidov@outlook.com12', '17.11.2022', '17:30:30', '17:51:12', 21, 'No error', 0, 0),
('a_zhidov@outlook.com12', '25.11.2022', '23:24:41', '23:33:32', 9, 'No error', 0, 0),
('a_zhidov@outlook.com1', '06.12.2022', '17:11:12', '17:13:29', 3, 'No error', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `countries`
--

CREATE TABLE `countries` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `countries`
--

INSERT INTO `countries` (`ID`, `Name`) VALUES
(1, 'Afghanistan'),
(2, 'Albania'),
(3, 'Algeria'),
(4, 'Andorra'),
(5, 'Angola'),
(6, 'Antigua & Deps'),
(7, 'Argentina'),
(8, 'Armenia'),
(9, 'Australia'),
(10, 'Austria'),
(11, 'Azerbaijan'),
(12, 'Bahamas'),
(13, 'Bahrain'),
(14, 'Bangladesh'),
(15, 'Barbados'),
(16, 'Belarus'),
(17, 'Belgium'),
(18, 'Belize'),
(19, 'Benin'),
(20, 'Bhutan'),
(21, 'Bolivia'),
(22, 'Bosnia Herzegovina'),
(23, 'Botswana'),
(24, 'Brazil'),
(25, 'Brunei'),
(26, 'Bulgaria'),
(27, 'Burkina'),
(28, 'Burundi'),
(29, 'Cambodia'),
(30, 'Cameroon'),
(31, 'Canada'),
(32, 'Cape Verde'),
(33, 'Central African Rep'),
(34, 'Chad'),
(35, 'Chile'),
(36, 'China'),
(37, 'Colombia'),
(38, 'Comoros'),
(39, 'Congo'),
(40, 'Congo {Democratic Rep}'),
(41, 'Costa Rica'),
(42, 'Croatia'),
(43, 'Cuba'),
(44, 'Cyprus'),
(45, 'Czech Republic'),
(46, 'Denmark'),
(47, 'Djibouti'),
(48, 'Dominica'),
(49, 'Dominican Republic'),
(50, 'East Timor'),
(51, 'Ecuador'),
(52, 'Egypt'),
(53, 'El Salvador'),
(54, 'Equatorial Guinea'),
(55, 'Eritrea'),
(56, 'Estonia'),
(57, 'Ethiopia'),
(58, 'Fiji'),
(59, 'Finland'),
(60, 'France'),
(61, 'Gabon'),
(62, 'Gambia'),
(63, 'Georgia'),
(64, 'Germany'),
(65, 'Ghana'),
(66, 'Greece'),
(67, 'Grenada'),
(68, 'Guatemala'),
(69, 'Guinea'),
(70, 'Guinea-Bissau'),
(71, 'Guyana'),
(72, 'Haiti'),
(73, 'Honduras'),
(74, 'Hungary'),
(75, 'Iceland'),
(76, 'India'),
(77, 'Indonesia'),
(78, 'Iran'),
(79, 'Iraq'),
(80, 'Ireland {Republic}'),
(81, 'Israel'),
(82, 'Italy'),
(83, 'Ivory Coast'),
(84, 'Jamaica'),
(85, 'Japan'),
(86, 'Jordan'),
(87, 'Kazakhstan'),
(88, 'Kenya'),
(89, 'Kiribati'),
(90, 'Korea North'),
(91, 'Korea South'),
(92, 'Kosovo'),
(93, 'Kuwait'),
(94, 'Kyrgyzstan'),
(95, 'Laos'),
(96, 'Latvia'),
(97, 'Lebanon'),
(98, 'Lesotho'),
(99, 'Liberia'),
(100, 'Libya'),
(101, 'Liechtenstein'),
(102, 'Lithuania'),
(103, 'Luxembourg'),
(104, 'Macedonia'),
(105, 'Madagascar'),
(106, 'Malawi'),
(107, 'Malaysia'),
(108, 'Maldives'),
(109, 'Mali'),
(110, 'Malta'),
(111, 'Marshall Islands'),
(112, 'Mauritania'),
(113, 'Mauritius'),
(114, 'Mexico'),
(115, 'Micronesia'),
(116, 'Moldova'),
(117, 'Monaco'),
(118, 'Mongolia'),
(119, 'Montenegro'),
(120, 'Morocco'),
(121, 'Mozambique'),
(122, 'Myanmar, {Burma}'),
(123, 'Namibia'),
(124, 'Nauru'),
(125, 'Nepal'),
(126, 'Netherlands'),
(127, 'New Zealand'),
(128, 'Nicaragua'),
(129, 'Niger'),
(130, 'Nigeria'),
(131, 'Norway'),
(132, 'Oman'),
(133, 'Pakistan'),
(134, 'Palau'),
(135, 'Panama'),
(136, 'Papua New Guinea'),
(137, 'Paraguay'),
(138, 'Peru'),
(139, 'Philippines'),
(140, 'Poland'),
(141, 'Portugal'),
(142, 'Qatar'),
(143, 'Romania'),
(144, 'Russian Federation'),
(145, 'Rwanda'),
(146, 'St Kitts & Nevis'),
(147, 'St Lucia'),
(148, 'Saint Vincent & the Grenadines'),
(149, 'Samoa'),
(150, 'San Marino'),
(151, 'Sao Tome & Principe'),
(152, 'Saudi Arabia'),
(153, 'Senegal'),
(154, 'Serbia'),
(155, 'Seychelles'),
(156, 'Sierra Leone'),
(157, 'Singapore'),
(158, 'Slovakia'),
(159, 'Slovenia'),
(160, 'Solomon Islands'),
(161, 'Somalia'),
(162, 'South Africa'),
(163, 'South Sudan'),
(164, 'Spain'),
(165, 'Sri Lanka'),
(166, 'Sudan'),
(167, 'Suriname'),
(168, 'Swaziland'),
(169, 'Sweden'),
(170, 'Switzerland'),
(171, 'Syria'),
(172, 'Taiwan'),
(173, 'Tajikistan'),
(174, 'Tanzania'),
(175, 'Thailand'),
(176, 'Togo'),
(177, 'Tonga'),
(178, 'Trinidad & Tobago'),
(179, 'Tunisia'),
(180, 'Turkey'),
(181, 'Turkmenistan'),
(182, 'Tuvalu'),
(183, 'Uganda'),
(184, 'Ukraine'),
(185, 'United Arab Emirates'),
(186, 'United Kingdom'),
(187, 'United States'),
(188, 'Uruguay'),
(189, 'Uzbekistan'),
(190, 'Vanuatu'),
(191, 'Vatican City'),
(192, 'Venezuela'),
(193, 'Vietnam'),
(194, 'Yemen'),
(195, 'Zambia'),
(196, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Структура таблицы `h_saeed`
--

CREATE TABLE `h_saeed` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `h_wyrick`
--

CREATE TABLE `h_wyrick` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `j_doe`
--

CREATE TABLE `j_doe` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `k_anderson`
--

CREATE TABLE `k_anderson` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `k_omar`
--

CREATE TABLE `k_omar` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `marie_hom`
--

CREATE TABLE `marie_hom` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `m_osteen`
--

CREATE TABLE `m_osteen` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `offices`
--

CREATE TABLE `offices` (
  `ID` int(11) NOT NULL,
  `CountryID` int(11) NOT NULL,
  `Title` varchar(50) COLLATE utf8_bin NOT NULL,
  `Phone` varchar(50) COLLATE utf8_bin NOT NULL,
  `Contact` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `offices`
--

INSERT INTO `offices` (`ID`, `CountryID`, `Title`, `Phone`, `Contact`) VALUES
(1, 185, 'Abu dhabi', '638-757-8582\r\n', 'MIchael Malki'),
(3, 52, 'Cairo', '252-224-8525', 'David Johns'),
(4, 13, 'Bahrain', '542-227-5825', 'Katie Ballmer'),
(5, 142, 'Doha', '758-278-9597', 'Ariel Levy'),
(6, 152, 'Riyadh', '285-285-1474', 'Andrew Hobart');

-- --------------------------------------------------------

--
-- Структура таблицы `rackitowa_cat`
--

CREATE TABLE `rackitowa_cat` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` varchar(150) DEFAULT NULL,
  `LogTime` varchar(150) DEFAULT NULL,
  `LogOutTime` varchar(150) DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rackitowa_cat`
--

INSERT INTO `rackitowa_cat` (`Name`, `Date`, `LogTime`, `LogOutTime`, `TimeSpendOne`, `Reason`, `TimeSpend`, `Crashes`) VALUES
('rackitowa.cat@gmail.com', '09.11.2022', '17:02:29', '17:02:33', 0, 'test', 0, 0),
('rackitowa.cat@gmail.com', '09.11.2022', '17:12:39', '17:12:42', 0, 'test121', 0, 1),
('rackitowa.cat@gmail.com', '10.11.2022', '12:36:06', '12:36:08', 0, 'test', 0, 1),
('rackitowa.cat@gmail.com', '10.11.2022', '12:55:36', '12:55:39', 0, 'test', 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `ID` int(11) NOT NULL,
  `Title` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`ID`, `Title`) VALUES
(1, 'Administrator'),
(2, 'User');

-- --------------------------------------------------------

--
-- Структура таблицы `routes`
--

CREATE TABLE `routes` (
  `ID` int(11) NOT NULL,
  `DepartureAirportID` int(11) NOT NULL,
  `ArrivalAirportID` int(11) NOT NULL,
  `Distance` int(11) NOT NULL,
  `FlightTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `routes`
--

INSERT INTO `routes` (`ID`, `DepartureAirportID`, `ArrivalAirportID`, `Distance`, `FlightTime`) VALUES
(1, 2, 4, 453, 64),
(2, 4, 2, 455, 69),
(3, 2, 5, 1636, 152),
(5, 5, 2, 1632, 150),
(6, 2, 7, 807, 90),
(7, 7, 2, 810, 89),
(8, 2, 6, 325, 54),
(9, 6, 2, 325, 54),
(10, 6, 3, 2057, 183),
(11, 3, 6, 2050, 177),
(12, 2, 3, 2381, 264),
(13, 3, 2, 2385, 274),
(14, 2, 3, 2381, 208),
(15, 3, 2, 2381, 211);

-- --------------------------------------------------------

--
-- Структура таблицы `schedules`
--

CREATE TABLE `schedules` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  `AircraftID` int(11) NOT NULL,
  `RouteID` int(11) NOT NULL,
  `EconomyPrice` double NOT NULL,
  `Confirmed` tinyint(1) NOT NULL,
  `FlightNumber` varchar(10) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `schedules`
--

INSERT INTO `schedules` (`ID`, `Date`, `Time`, `AircraftID`, `RouteID`, `EconomyPrice`, `Confirmed`, `FlightNumber`) VALUES
(1, '2017-10-04', '17:00:00', 1, 1, 620, 1, '49'),
(2, '2017-10-04', '21:09:00', 1, 2, 590, 1, '50'),
(3, '2017-10-05', '17:00:00', 1, 1, 448, 1, '49'),
(4, '2017-10-05', '21:09:00', 1, 2, 500, 1, '50'),
(5, '2017-10-06', '17:00:00', 1, 1, 697, 1, '49'),
(6, '2017-10-06', '21:09:00', 1, 2, 504, 1, '50'),
(7, '2017-10-07', '17:00:00', 1, 1, 449, 1, '49'),
(8, '2017-10-07', '21:09:00', 1, 2, 405, 1, '50'),
(9, '2017-10-08', '17:00:00', 1, 1, 494, 1, '49'),
(10, '2017-10-08', '21:09:00', 1, 2, 429, 1, '50'),
(11, '2017-10-09', '17:00:00', 1, 1, 627, 1, '49'),
(12, '2017-10-09', '21:09:00', 1, 2, 545, 1, '50'),
(13, '2017-10-10', '17:00:00', 1, 1, 637, 1, '49'),
(14, '2017-10-10', '21:09:00', 1, 2, 489, 1, '50'),
(15, '2017-10-11', '17:00:00', 1, 1, 421, 1, '49'),
(16, '2017-10-11', '21:09:00', 1, 2, 476, 1, '50'),
(17, '2017-10-12', '17:00:00', 1, 1, 484, 1, '49'),
(18, '2017-10-12', '21:09:00', 1, 2, 440, 1, '50'),
(19, '2017-10-13', '17:00:00', 1, 1, 464, 1, '49'),
(20, '2017-10-13', '21:09:00', 1, 2, 661, 1, '50'),
(21, '2017-10-14', '17:00:00', 1, 1, 437, 1, '49'),
(22, '2017-10-14', '21:09:00', 1, 2, 493, 1, '50'),
(23, '2017-10-15', '17:00:00', 1, 1, 699, 1, '49'),
(24, '2017-10-15', '21:09:00', 1, 2, 608, 1, '50'),
(25, '2017-10-16', '17:00:00', 1, 1, 417, 1, '49'),
(26, '2017-10-16', '21:09:00', 1, 2, 577, 1, '50'),
(27, '2017-10-17', '17:00:00', 1, 1, 458, 1, '49'),
(28, '2017-10-17', '21:09:00', 1, 2, 429, 1, '50'),
(29, '2017-10-18', '17:00:00', 1, 1, 686, 1, '49'),
(30, '2017-10-18', '21:09:00', 1, 2, 692, 1, '50'),
(31, '2017-10-19', '17:00:00', 1, 1, 482, 1, '49'),
(32, '2017-10-19', '21:09:00', 1, 2, 612, 1, '50'),
(33, '2017-10-20', '17:00:00', 1, 1, 620, 1, '49'),
(34, '2017-10-20', '21:09:00', 1, 2, 432, 1, '50'),
(35, '2017-10-21', '17:00:00', 1, 1, 480, 1, '49'),
(36, '2017-10-21', '21:09:00', 1, 2, 582, 1, '50'),
(37, '2017-10-22', '17:00:00', 1, 1, 453, 1, '49'),
(38, '2017-10-22', '21:09:00', 1, 2, 537, 1, '50'),
(39, '2017-10-23', '17:00:00', 1, 1, 537, 1, '49'),
(40, '2017-10-23', '21:09:00', 1, 2, 578, 1, '50'),
(41, '2017-10-24', '17:00:00', 1, 1, 571, 1, '49'),
(42, '2017-10-24', '21:09:00', 1, 2, 532, 1, '50'),
(43, '2017-10-25', '17:00:00', 1, 1, 544, 1, '49'),
(44, '2017-10-25', '21:09:00', 1, 2, 634, 1, '50'),
(45, '2017-10-26', '17:00:00', 1, 1, 494, 1, '49'),
(46, '2017-10-26', '21:09:00', 1, 2, 625, 1, '50'),
(47, '2017-10-27', '17:00:00', 1, 1, 406, 1, '49'),
(48, '2017-10-27', '21:09:00', 1, 2, 578, 1, '50'),
(49, '2017-10-28', '17:00:00', 1, 1, 537, 1, '49'),
(50, '2017-10-28', '21:09:00', 1, 2, 440, 1, '50');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `Name` varchar(150) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `LogTime` date DEFAULT NULL,
  `LogOutTime` date DEFAULT NULL,
  `TimeSpendOne` int(20) DEFAULT NULL,
  `Reason` varchar(150) DEFAULT NULL,
  `TimeSpend` int(20) DEFAULT NULL,
  `Crashes` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `Email` varchar(150) COLLATE utf8_bin NOT NULL,
  `Password` varchar(100) COLLATE utf8_bin NOT NULL,
  `FirstName` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `LastName` varchar(50) COLLATE utf8_bin NOT NULL,
  `OfficeID` int(11) DEFAULT NULL,
  `Birthdate` date DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`ID`, `RoleID`, `Email`, `Password`, `FirstName`, `LastName`, `OfficeID`, `Birthdate`, `Active`) VALUES
(1, 1, 'a_zhidov@outlook.com', '$2b$07$xiy5FPmUAFY7wkrpWwiB.OSeEK0Tpd0K1boP6z1AF/3euJMd.DUe6', 'Artem', 'Zhidov', 1, '2016-12-20', 1),
(2, 1, 'j.doe@amonic.com', '$2b$07$muBoA1ggur2NO5FBRTsj5OiTLzFBFCD.wQFbyu4aR1kVVPFY6LLhK', 'John', 'Doe', 1, '1983-01-13', 1),
(3, 2, 'k.omar@amonic.com', '$2b$07$8bPzHGXvW2d1ve53ufYo0.TBlIQDP91G6nhLo/abcHPgFmAuspgxa', 'Karim', 'Omar', 1, '1980-03-19', 1),
(4, 1, 'h.saeed@amonic.com', '$2b$07$WNJXt6hv8M4SVFkyFCLUeOoRCcip8jw6BpPkVu/APv4ne0liDtw26', 'Hannan', 'Saeed', 3, '1989-12-20', 1),
(5, 2, 'a.hobart@amonic.com', '$2b$07$zf3GYzeYQrmcsgFgp4a/mu8.4/TeItpQkIPkX89sFx8gPuTk8acm6', 'Andrew', 'Hobart', 6, '1990-01-30', 1),
(6, 2, 'k.anderson@amonic.com', '$2b$07$LkfFT.C5DNlMHp88gbMjdeVZffx66MaX4usSZDBYKSwJWKACUwCVO', 'Katrin', 'Anderson', 5, '1992-10-11', 1),
(7, 2, 'h.wyrick@amonic.com', '$2b$07$V.dzrM8o5.q4hrveFy6Wbe7gqa6TO7P65YerZKAOnYskEyrnYND3y', 'Hava', 'Wyrick', 1, '1988-08-08', 1),
(8, 2, 'marie.hom@amonic.com', '$2b$07$Uberqg7gU1k0O19Rt.A8FuON0V2CzDdGxlRV.Ag11yCt8xDglVA6O', 'Marie', 'Hom', 4, '1981-06-04', 1),
(9, 2, 'm.osteen@amonic.com', '$2b$07$CJustHNreV2OHDLnfLBOnetOK9dFZYMCL7Ct2yigCZGPck948iNca', 'Milagros', 'Osteen', 1, '1991-03-02', 0),
(10, 2, 'user@amonic.com', '$2b$07$FNCE2SYNpDXNMovMrEsOeusgLC2J/C1gYtECjrVr9ySs1OxVbHCSe', 'user', 'user', 1, '1990-01-01', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `aircrafts`
--
ALTER TABLE `aircrafts`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `airports`
--
ALTER TABLE `airports`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_AirPort_Country` (`CountryID`);

--
-- Индексы таблицы `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `offices`
--
ALTER TABLE `offices`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Office_Country` (`CountryID`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Routes_Airports2` (`DepartureAirportID`),
  ADD KEY `FK_Routes_Airports3` (`ArrivalAirportID`);

--
-- Индексы таблицы `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Schedule_AirCraft` (`AircraftID`),
  ADD KEY `FK_Schedule_Routes` (`RouteID`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Users_Offices` (`OfficeID`),
  ADD KEY `FK_Users_Roles` (`RoleID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `airports`
--
ALTER TABLE `airports`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `countries`
--
ALTER TABLE `countries`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT для таблицы `offices`
--
ALTER TABLE `offices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `routes`
--
ALTER TABLE `routes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `schedules`
--
ALTER TABLE `schedules`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `airports`
--
ALTER TABLE `airports`
  ADD CONSTRAINT `FK_AirPort_Country` FOREIGN KEY (`CountryID`) REFERENCES `countries` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `offices`
--
ALTER TABLE `offices`
  ADD CONSTRAINT `FK_Office_Country` FOREIGN KEY (`CountryID`) REFERENCES `countries` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `routes`
--
ALTER TABLE `routes`
  ADD CONSTRAINT `FK_Routes_Airports2` FOREIGN KEY (`DepartureAirportID`) REFERENCES `airports` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_Routes_Airports3` FOREIGN KEY (`ArrivalAirportID`) REFERENCES `airports` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `FK_Schedule_AirCraft` FOREIGN KEY (`AircraftID`) REFERENCES `aircrafts` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_Schedule_Routes` FOREIGN KEY (`RouteID`) REFERENCES `routes` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_Users_Offices` FOREIGN KEY (`OfficeID`) REFERENCES `offices` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_Users_Roles` FOREIGN KEY (`RoleID`) REFERENCES `roles` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
