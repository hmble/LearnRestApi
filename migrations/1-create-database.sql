-- Create database
DROP DATABASE IF EXISTS `test2`;

CREATE DATABASE `test2`;

USE `test2`;

-- Create customer table
CREATE TABLE `customers` (
  `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  CONSTRAINT `customers_pk` PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB;


/*
  Foreign Key:
  1. customer_id (khatabook_fk_customers)
  2. order_id (khatabook_fk_orders)
 */
CREATE TABLE `khatabook` (
  `khata_id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_id` INT(11) NOT NULL,
  `order_id` INT(11) NOT NULL,
  `total_udhaar` INT(11) NOT NULL DEFAULT '0',
  CONSTRAINT `khatabook_pk` PRIMARY KEY (`khata_id`)
) ENGINE=InnoDB;

/*
  Foreign key: customer_id (orders_fk_customers)
 */
CREATE TABLE `orders` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `total_amount` INT(11) NOT NULL DEFAULT '0',
  `is_paid` BOOL NOT NULL DEFAULT FALSE,
  `created_at` date NOT NULL,
  `customer_id` INT(11) NOT NULL,
  CONSTRAINT `orders_pk` PRIMARY KEY (`order_id`)

) ENGINE=InnoDB;

ALTER TABLE `khatabook`
  ADD CONSTRAINT `khatabook_fk_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
  ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `khatabook_fk_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `orders`
  ADD CONSTRAINT `orders_fk_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
  ON DELETE CASCADE ON UPDATE CASCADE;


/*
  Foreign Key:
  1. product_id(orderdetails_fk_products)
  2. order_id(orderdetails_fk_orders)
*/
CREATE TABLE `orderdetails` (
  `item_id` INT(11) NOT NULL AUTO_INCREMENT,
  `order_id` INT(11) NOT NULL,
  -- TODO(hmble): product_id as string ??
  `product_id` INT(11) NOT NULL,
  `product_name` VARCHAR(50) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `unit_cost` INT(11) NOT NULL,

  CONSTRAINT `orderdetails_pk` PRIMARY KEY (`item_id`)
  ) ENGINE=InnoDB;

  CREATE TABLE `products` (
    `product_id` INT(11) NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(50) NOT NULL,
    `price` INT(11) NOT NULL,
    `buyprice` INT(11) NOT NULL,

  CONSTRAINT `products_pk` PRIMARY KEY (`product_id`)
  ) ENGINE=InnoDB;

ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_fk_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
  ON DELETE CASCADE ON UPDATE CASCADE,

  ADD CONSTRAINT `orderdetails_fk_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

