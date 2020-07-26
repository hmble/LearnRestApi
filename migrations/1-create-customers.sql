
-- create customers table
USE test;
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `city` varchar(200) NOT NULL,
  `total_lend_amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

