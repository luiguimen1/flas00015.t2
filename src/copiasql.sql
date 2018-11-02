-- MySQL dump 10.16  Distrib 10.1.25-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: flas015
-- ------------------------------------------------------
-- Server version	10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cate`
--

DROP TABLE IF EXISTS `cate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `detalles` varchar(200) NOT NULL,
  `foto` varchar(45) DEFAULT 'sinfotocate.svg',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cate`
--

LOCK TABLES `cate` WRITE;
/*!40000 ALTER TABLE `cate` DISABLE KEYS */;
INSERT INTO `cate` VALUES (1,'sadfsa','adsfsafas','03920763c33c84d227de5bc301d36dba05c68ac5.jpg'),(2,'prueba','ksjdalgsd','4d82ce0a6a57de6042aa905bef446d63419e9331.jpg'),(3,'la sexta','Modificar','48065ce14772a3ffadaa53d95cd94d015a76c0ca.jpg');
/*!40000 ALTER TABLE `cate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `cedula` varchar(15) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `tele` varchar(15) NOT NULL,
  `clave` varchar(50) NOT NULL,
  `foto` varchar(50) DEFAULT 'sinfoto.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula` (`cedula`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'ewtrwer','wertwert','345235','wertwet@werew.fgh','wert#ertwt fghd','2345235235','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(4,'ewtrwer','wertwert','23412','wertwet@w435erew.fgh','wert#ertwt fghd','2345235235','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(16,'ewrtwe','wertwetw','345234523','wertwer@rtwe.com','qwerwqerqwe','342523','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(18,'wertwe','wertwe','234523','wertwet@sdf.cvs','dfgdsg','45253','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(19,'nicoll','valentina','132412412','qer@adfa.com','djafgafa','42315234','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(21,'werwer','qwerqw','34542352','wertwer@sdfg.vom','wqerqwrq','43252352','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg'),(23,'wetrwet','wertwertwe','12344321','erqwer@werew.com','wqerqwerwqe','342352345','b1b3773a05c0ed0176787a4f1574ff0075f7521e','sinfoto.jpg');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-02 10:50:28
