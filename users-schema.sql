-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: std-mysql
-- Время создания: Сен 19 2022 г., 07:56
-- Версия сервера: 5.7.26-0ubuntu0.16.04.1
-- Версия PHP: 8.0.15

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
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `Email` varchar(150) COLLATE utf8_bin NOT NULL,
  `Password` varchar(50) COLLATE utf8_bin NOT NULL,
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
(1, 1, 'j.doe@amonic.com', '123', 'John', 'Doe', 1, '1983-01-13', 1),
(2, 2, 'k.omar@amonic.com', '4258', 'Karim', 'Omar', 1, '1980-03-19', 1),
(3, 2, 'h.saeed@amonic.com', '2020', 'Hannan', 'Saeed', 3, '1989-12-20', 1),
(4, 2, 'a.hobart@amonic.com', '6996', 'Andrew', 'Hobart', 6, '1990-01-30', 1),
(5, 2, 'k.anderson@amonic.com', '4570', 'Katrin', 'Anderson', 5, '1992-10-11', 1),
(6, 2, 'h.wyrick@amonic.com', '1199', 'Hava', 'Wyrick', 1, '1988-08-08', 1),
(7, 2, 'marie.horn@amonic.com', '55555', 'Marie', 'Horn', 4, '1981-06-04', 1),
(8, 2, 'm.osteen@amonic.com', '9800', 'Milagros', 'Osteen', 1, '1991-03-02', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_Users_Offices` (`OfficeID`),
  ADD KEY `FK_Users_Roles` (`RoleID`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

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
