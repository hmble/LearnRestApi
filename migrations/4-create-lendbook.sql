
-- create lendbook

DROP TABLE IF EXISTS `lendbook`;
 CREATE TABLE `lendbook` (
  `customer_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `closed_at` date NOT NULL,
  `is_settled` BOOL NOT NULL,
  CONSTRAINT `lendbook_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`
  (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
