-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: portal_de_aplicaciones
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aplicaciones`
--

DROP TABLE IF EXISTS `aplicaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aplicaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `url` varchar(2083) DEFAULT NULL,
  `descripcion` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aplicaciones`
--

LOCK TABLES `aplicaciones` WRITE;
/*!40000 ALTER TABLE `aplicaciones` DISABLE KEYS */;
INSERT INTO `aplicaciones` VALUES (1,'NCD','http://ncd.lat.intranet/QuickSearch','Descripción'),(2,'Service Now','https://sacfs.service-now.com/now/nav/ui/classic/params/target/sn_chg_model_ui_landing.do','Descripción'),(3,'Powe BI','https://app.powerbi.com/groups/me/apps/0b7ecded-a7a4-4ee8-a030-747d7d7a4797/reports/9cfd40c5-0438-4b73-86d7-0030ec725ee8/ReportSection3abb3f56d8c0d16421e6?experience=power-bi','Descripción'),(4,'PBI-SM','http://llfinder.lat.intranet/Home/Home','Descripción'),(5,'EON Power BI','https://app.powerbi.com/groups/me/reports/af86c27e-eed5-4f03-9662-62705ab0e254/ReportSection1dc796548ec199ae41d8?ctid=0abdd594-13d3-401e-a704-19830f19e888&experience=power-bi','Descripción'),(6,'CFS','http://dkvapi.lat.intranet/cfsoogle.html','Descripción'),(7,'Dashboard Lumen','https://app.powerbi.com/groups/me/reports/831d7733-3a19-43eb-92ca-aef1acab7208/ReportSectionf6886874150340744c0a?ctid=0abdd594-13d3-401e-a704-19830f19e888&openReportSource=ReportInvitation&experience=power-bi','Descripción'),(26,'NDC','\nhttp://ncd/QuickSearch',''),(27,'Reporte PBI','\nhttps://app.powerbi.com/groups/me/reports/1fefb55d-69ae-4e11-8234-742a9e487089/ReportSection?ctid=0abdd594-13d3-401e-a704-19830f19e888&experience=power-bi%0a','Reporte PBI de Change Management CHGs & KPI'),(28,'CFS','\nhttp://dkvapi.lat.intranet/cfsoogle.html','Google CFS nuevo'),(29,'Asignación de SM','\nhttps://app.powerbi.com/groups/me/apps/0b7ecded-a7a4-4ee8-a030-747d7d7a4797/reports/9cfd40c5-0438-4b73-86d7-0030ec725ee8/ReportSection3abb3f56d8c0d16421e6?experience=power-bi',''),(30,'Finder Producción','\nhttp://llfinder.lat.intranet/Home/Home',''),(31,'SM-CM','\nhttps://xyzlatam.sharepoint.com/:x:/r/sites/MigracinaCirionLegacyPlatforms/_layouts/15/Doc.aspx?sourcedoc=%7B5E0CD166-5C27-4CFD-81AF-27CA641F1952%7D&file=Seguimiento%20SM-CSM.xlsx&wdLOR=c2EB37E8D-6831-4A78-96D7-EA93698EAB18&action=default&mobileredirect=true','Planilla Seguimiento SM-CM'),(32,'Planilla Control de Carga','\nhttps://xyzlatam.sharepoint.com/:x:/r/sites/MigracinaCirionLegacyPlatforms/_layouts/15/Doc.aspx?sourcedoc=%7BA07E8F76-D71E-4AAA-9800-B668DCA84017%7D&file=CONTROL%20CARGA%20v3.xlsx&wdLOR=c66D5F301-E563-49E5-87F2-E1F6D1050607&action=default&mobileredirect=true','Planilla Control de Carga'),(33,'Planilla Cirion Owned','\nhttps://xyzlatam.sharepoint.com/:x:/s/MigracinaCirionLegacyPlatforms/EeGvgEP0IfZKobWlbR3ho74BWWKCmg5U44YEu5EKXtMdag?e=ymR9Y7&CID=196779D8-F169-47A5-B446-93778D635776&wdLOR=c7AAFF437-A274-456E-B3A5-6A14691733D9','Planilla Cirion Owned in SwIFT-25-JULY'),(34,'Carrier Escalation List','\nhttps://xyzlatam.sharepoint.com/sites/CTLCarrierRelations/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x012000DA159B67B508E34CB447F3E67F6B6D3B&id=%2Fsites%2FCTLCarrierRelations%2FShared%20Documents%2FLATAM%2FCarrier%20Vendor%20Escalation%20Lists&viewid=c4d72dfb%2D66cc%2D418d%2D9daa%2Df253f6e3ba5d%0a','Carrier Escalation list'),(35,'Proyect Detail','\nhttp://deliveryconsole/pdetailsearch.asp',''),(36,'Latam SM Power Bi','\nhttps://app.powerbi.com/groups/me/reports/48ec9fa2-a639-4c9e-a35d-6b70d659603d/ReportSection636e222719233b3dca65?experience=power-bi','LATAM_SM_Asignación_Clientes_PowerBi'),(37,'Base Nall','\nhttp://reporting-latam/Reports/report/Leased%20Capacity%20Management/Leased%20Lines/Dokuviz/Reporte%20Leased%20Lines%0a',''),(38,'OpenIA','\nhttps://chat.openai.com/',''),(39,'Help Desk','\nhttps://itcirion.service-now.com/esc',''),(40,'LoopBack Devices','\nhttps://centurylink.sharepoint.com/:x:/r/sites/LCALumenCirionDay1/_layouts/15/doc2.aspx?sourcedoc=%7B29C6B17C-87D2-4064-8EF7-74C35DF1173F%7D&file=Loopback%20Devices%20requiring%20SA%20GCRs%20%20a%20notificar%20v7.xlsx&action=default&mobileredirect=true','Loopback Devices requiring SA GCRs a notificar v7.xlsx'),(41,'Service Portal Cirex','\nhttps://serviceportal-cirex.ciriontechnologies.com/login',''),(42,'Cirex Portal','\nhttps://serviceportal-cirex.ciriontechnologies.com/login',''),(43,'Proyectos','\nhttps://serviceportal-cirex.ciriontechnologies.com/login','Planilla de carga de proyectos');
/*!40000 ALTER TABLE `aplicaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `usuario_id` int NOT NULL,
  `aplicacion_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`aplicacion_id`),
  KEY `aplicacion_id` (`aplicacion_id`),
  CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`aplicacion_id`) REFERENCES `aplicaciones` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (42,'brenda','brendaruthherrera@gmail.com','$2b$10$7eyxDak01pPOso7X5roJyOmOOGahouT/rTiVgk2cDBVBbd4R5CEUi',0),(47,'ruth','ruthbrendaherrera@gmail.com','$2b$10$UMJrEJQsp5v5/kUp01WP7OQtl0VP9lYOMXZafnAdH7wJuWwijYdoe',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-19 16:41:44
