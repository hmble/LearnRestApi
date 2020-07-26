
-- create orders table
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `create_at` date NOT NULL,
  `is_paid` BOOL NOT NULL,
  `total_amount` int(11) NOT NULL,
  `discount_amount` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`
  (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- crate orderdetails table

DROP TABLE IF EXISTS `orderdetails`;
 CREATE TABLE `orderdetails` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`
  (`product_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
