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

 -- Create products table
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) NOT NULL,
  `current_stock` varchar(50) NOT NULL,
  `sellprice` int(11) NOT NULL,
  `buyprice` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

/* -- create orders table */
/* DROP TABLE IF EXISTS `orders`; */
/* CREATE TABLE `orders` ( */
/*   `order_id` int(11) NOT NULL AUTO_INCREMENT, */
/*   `customer_id` int(11) NOT NULL, */
/*   `create_at` date NOT NULL, */
/*   `is_paid` BOOL NOT NULL, */
/*   `total_amount` int(11) NOT NULL, */
/*   `discount_amount` int(11) NOT NULL, */
/*   PRIMARY KEY (`order_id`), */
/*   CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` */
/*   (`customer_id`) */
/*     ) ENGINE=InnoDB DEFAULT CHARSET=utf8; */

/* -- crate orderdetails table */

/* DROP TABLE IF EXISTS `orderdetails`; */
/*  CREATE TABLE `orderdetails` ( */
/*   `order_id` int(11) NOT NULL, */
/*   `product_id` int(11) NOT NULL, */
/*   `quantity` int(11) NOT NULL, */
/*   `price` int(11) NOT NULL, */
/*   CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` */
/*   (`product_id`) */
/*     ) ENGINE=InnoDB DEFAULT CHARSET=utf8; */

/* -- create lendbook */

/* DROP TABLE IF EXISTS `lendbook`; */
/*  CREATE TABLE `lendbook` ( */
/*   `customer_id` int(11) NOT NULL, */
/*   `amount` int(11) NOT NULL, */
/*   `created_at` date NOT NULL, */
/*   `closed_at` date NOT NULL, */
/*   `is_settled` BOOL NOT NULL, */
/*   CONSTRAINT `lendbook_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` */
/*   (`customer_id`) */
/*     ) ENGINE=InnoDB DEFAULT CHARSET=utf8; */
