CREATE DATABASE  IF NOT EXISTS `istech_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `istech_management`;
-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: istech_management
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `audiences`
--

DROP TABLE IF EXISTS `audiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audiences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `student_id` int DEFAULT NULL,
  `class` varchar(12) NOT NULL,
  `is_vnuis_student` tinyint(1) DEFAULT NULL,
  `total_events_registered` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `interested_in` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `audiences_classes_class_code_fk` (`class`),
  KEY `audiences_skills_id_fk` (`interested_in`),
  CONSTRAINT `audiences_classes_class_code_fk` FOREIGN KEY (`class`) REFERENCES `classes` (`class_code`),
  CONSTRAINT `audiences_skills_id_fk` FOREIGN KEY (`interested_in`) REFERENCES `skills` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audiences`
--

LOCK TABLES `audiences` WRITE;
/*!40000 ALTER TABLE `audiences` DISABLE KEYS */;
/*!40000 ALTER TABLE `audiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `class_code` varchar(12) NOT NULL,
  `class_major` varchar(12) NOT NULL,
  `total_students` int DEFAULT NULL,
  `graduated_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`class_code`),
  KEY `classes_majors_major_code_fk` (`class_major`),
  CONSTRAINT `classes_majors_major_code_fk` FOREIGN KEY (`class_major`) REFERENCES `majors` (`major_code`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES ('IB2018A','IB',NULL,0),('IB2018B','IB',NULL,0),('IB2020A','IB',NULL,0),('ICE2017A','ICE',NULL,0),('ICE2018A','ICE',NULL,0),('ICE2019','ICE',NULL,0),('ICE2020B','ICE',NULL,0),('MIS2018A','MIS',NULL,0);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL,
  `department_code` varchar(5) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `lead` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`department_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (9,'ADV','Advisory Board','TanhNV'),(7,'BA','Business Analyst','AnhNP'),(1,'BOD','Board of Directors','DucLA'),(4,'DS','Data Science','NhungLT'),(2,'FS','Full-stack Development','NghiaPD'),(3,'GG','Game Development','TuanNM'),(8,'HR','Human Resources','VanNH'),(5,'IOT','Internet of Things','DangTQ'),(6,'MEDIA','Media and Public Relations','ThuHTN');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_coordinators`
--

DROP TABLE IF EXISTS `event_coordinators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_coordinators` (
  `event_id` int NOT NULL,
  `member_account` varchar(64) NOT NULL,
  `role` text,
  `is_organizer` tinyint(1) NOT NULL DEFAULT '1',
  KEY `event_coordinators_events_id_fk` (`event_id`),
  KEY `event_coordinators_members_account_fk` (`member_account`),
  CONSTRAINT `event_coordinators_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `event_coordinators_members_account_fk` FOREIGN KEY (`member_account`) REFERENCES `members` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_coordinators`
--

LOCK TABLES `event_coordinators` WRITE;
/*!40000 ALTER TABLE `event_coordinators` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_coordinators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_registration_list`
--

DROP TABLE IF EXISTS `event_registration_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_registration_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `audience_id` int DEFAULT NULL,
  `registered_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `event_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `event_registration_id__fk` (`event_id`),
  KEY `event_registration_audience__fk` (`audience_id`),
  CONSTRAINT `event_registration_audience__fk` FOREIGN KEY (`audience_id`) REFERENCES `audiences` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `event_registration_id__fk` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_registration_list`
--

LOCK TABLES `event_registration_list` WRITE;
/*!40000 ALTER TABLE `event_registration_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_registration_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(500) DEFAULT NULL,
  `event_pic` varchar(64) DEFAULT NULL,
  `event_target_audience` varchar(255) DEFAULT NULL,
  `event_coordinators` int DEFAULT NULL,
  `date_hosted` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `event_registration_list` int DEFAULT NULL,
  `event_assets` int DEFAULT NULL,
  `description` text,
  `event_survey_report` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `events_members_account_fk` (`event_pic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaders`
--

DROP TABLE IF EXISTS `leaders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaders` (
  `lead_account` varchar(64) DEFAULT NULL,
  `lead_department` varchar(5) NOT NULL,
  KEY `leaders_member_account__fk` (`lead_account`),
  KEY `leaders_department__fk` (`lead_department`),
  CONSTRAINT `leaders_department__fk` FOREIGN KEY (`lead_department`) REFERENCES `departments` (`department_code`),
  CONSTRAINT `leaders_member_account__fk` FOREIGN KEY (`lead_account`) REFERENCES `members` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaders`
--

LOCK TABLES `leaders` WRITE;
/*!40000 ALTER TABLE `leaders` DISABLE KEYS */;
/*!40000 ALTER TABLE `leaders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `majors` (
  `major_code` varchar(64) NOT NULL,
  `major_group` varchar(64) NOT NULL,
  `major_name_en` varchar(255) NOT NULL,
  `major_name_vi` varchar(255) NOT NULL,
  `desc_en` text,
  `desc_vi` text,
  PRIMARY KEY (`major_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` VALUES ('IB','KTQL','International Business','Kinh doanh Quốc tế','Bachelor\'s Degree','Cử nhân'),('ICE','KHTN&CN','Informatics and Computer Engineering','Tin học và Kĩ thuật Máy tính','Bachelor\'s Degree','Cử nhân'),('MIS','KHTN&CN','Management of Information Systems','Hệ thống thông tin quản lý','Bachelor\'s Degree','Cử nhân');
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(64) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `class` varchar(64) DEFAULT NULL,
  `student_id` int NOT NULL,
  `ms_teams_email` varchar(64) DEFAULT NULL,
  `facebook_account` varchar(64) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `trello_account` varchar(64) DEFAULT NULL,
  `city_code` varchar(64) DEFAULT NULL,
  `department_code` varchar(5) NOT NULL,
  `generation` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(64) DEFAULT NULL,
  `joined_since` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`),
  UNIQUE KEY `members_account_uindex` (`account`),
  KEY `members_departments__fk` (`department_code`),
  KEY `members_classes__fk` (`class`),
  CONSTRAINT `members_classes__fk` FOREIGN KEY (`class`) REFERENCES `classes` (`class_code`) ON UPDATE CASCADE,
  CONSTRAINT `members_departments__fk` FOREIGN KEY (`department_code`) REFERENCES `departments` (`department_code`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'DucLA','Anh Đức','Lê','2000-01-30','ICE2018A',18071516,'18071516@vnu.edu.vn','ladcva','me@anhducle.com','ladcva','HN','BOD',0,'2021-10-20 15:19:25','DucLA','2020-06-23'),(2,'QuyDV','Văn Quý','Đỗ',NULL,'ICE2017A',17071395,'17071395@vnu.edu.vn',NULL,'qisvnu@gmail.com',NULL,'BG','ADV',0,'2021-10-20 16:53:54','DucLA','2020-06-23'),(3,'VanNH','Hải Vân','Nguyễn',NULL,'MIS2018A',18071509,NULL,NULL,'vannguyenhai14@gmail.com',NULL,'HN','BOD',2,'2021-10-20 16:57:51','DucLA','2021-08-01'),(4,'AnhNP','Phương Anh','Nguyễn',NULL,'IB2020A',20070009,NULL,NULL,'phuonganhreal184@gmail.com',NULL,'HN','BOD',2,'2021-10-20 17:00:39','DucLA','2021-08-01'),(5,'ThangLMA','Mai Anh Thắng','Lê',NULL,'ICE2017A',17071396,'17071396@vnu.edu.vn',NULL,'anhthang00711@gmail.com',NULL,'HN','ADV',0,'2021-10-22 16:52:51','DucLA','2020-06-23'),(9,'NhungLT','Thị Nhung','Lê','2002-07-04','ICE2020B',20070866,'20070866@vnu.edu.vn','nhung.thi.le.ph','lethinhung9819@gmail.com','lethinhung9819@gmail.com','TH','DS',2,'2021-10-23 22:23:36','DucLA','2020-10-01');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) DEFAULT NULL,
  `skill_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8081 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'C',NULL),(2,'Python',NULL),(3,'Java',NULL),(4,'Javascript',NULL),(5,'React',NULL),(6,'React Native',NULL),(7,'C#',NULL),(8,'MySQL',NULL),(9,'HTML',NULL),(10,'CSS',NULL),(11,'PHP',NULL),(12,'Swift',NULL),(13,'Azure',NULL),(14,'C++',NULL),(15,'Linux',NULL),(16,'Shell',NULL),(17,'Arduino',NULL),(18,'Raspberry Pi',NULL),(19,'.NET',NULL),(20,'Microsoft Azure',NULL),(21,'AWS',NULL),(22,'Google Cloud',NULL),(23,'Tensorflow',NULL),(24,'Sci-kit Learn',NULL),(25,'Machine Learning',NULL),(26,'Deep Learning',NULL),(27,'R',NULL),(28,'Tableau',NULL),(29,'PowerBI',NULL),(30,'Scientific Research',NULL),(31,'Business Research',NULL),(32,'Business Analytics',NULL),(33,'Project Management',NULL),(34,'Apache Hadoop',NULL),(35,'Apache Spark',NULL),(36,'Apache Airflow',NULL),(37,'Microsoft Office',NULL),(38,'Google Workspace',NULL),(39,'NodeJS',NULL),(40,'Flask',NULL),(41,'Django',NULL),(42,'Git',NULL),(43,'Azure DevOps',NULL),(44,'Databricks',NULL),(45,'Photoshop',NULL),(46,'Illustrator',NULL),(47,'Premiere Pro',NULL),(48,'After Effects',NULL),(49,'Adobe XD',NULL),(50,'Figma',NULL),(51,'Event Management',NULL),(52,'Go',NULL),(53,'Docker',NULL),(54,'Kubernetes',NULL),(55,'Terraform',NULL),(56,'Redis',NULL),(57,'ElasticSearch',NULL),(58,'Firebase',NULL),(59,'MongoDB',NULL),(60,'Kotlin',NULL),(61,'Apache Kafka',NULL),(62,'AngularJS',NULL),(63,'VueJS',NULL),(64,'TypeScript',NULL),(65,'GraphQL',NULL),(66,'Ruby',NULL),(67,'Unity',NULL),(68,'Unreal Engine',NULL),(69,'Cassandra',NULL),(70,'OpenCV',NULL),(71,'Scala',NULL),(72,'Heroku',NULL),(73,'ExpressJS',NULL),(74,'Sass',NULL),(75,'Apache Druid',NULL),(76,'Rust',NULL),(77,'Perl',NULL),(78,'Pascal',NULL),(79,'Wordpress',NULL),(80,'Objective-C',NULL);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skillset`
--

DROP TABLE IF EXISTS `skillset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skillset` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(64) NOT NULL,
  `skill` int NOT NULL,
  `is_primary_skill` tinyint(1) DEFAULT '0',
  `is_secondary_skill` tinyint(1) DEFAULT '0',
  `percentage` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `skillset_skill__fk` (`skill`),
  KEY `skillset_account__fk` (`account`),
  CONSTRAINT `skillset_account__fk` FOREIGN KEY (`account`) REFERENCES `members` (`account`) ON UPDATE CASCADE,
  CONSTRAINT `skillset_skill__fk` FOREIGN KEY (`skill`) REFERENCES `skills` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skillset`
--

LOCK TABLES `skillset` WRITE;
/*!40000 ALTER TABLE `skillset` DISABLE KEYS */;
INSERT INTO `skillset` VALUES (1,'DucLA',42,1,NULL,NULL),(2,'DucLA',56,0,0,0);
/*!40000 ALTER TABLE `skillset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-12 21:45:28
