## Customer
  - customer_id (PK) (AutoIncrement)
  - customer_name
  - phone
  - city
  - total_lend_amount
   
```
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(50) NOT NULL,
  `city` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `total_lend_amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

## Products
  - product_id (PK) (AutoIncrement)
  - product_name
  - current_stock
  - sellprice 
  - buyprice

```
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `current_stock` varchar(50) NOT NULL,
  `sellprice` int(11) NOT NULL,
  `buyprice` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; 
```
  

  
## Orders
  - order_id (PK) (Auto Increment)
  - customer_id (FK)
  - create_at 
  - total_amount
  - isPaid
  - discount_amount

```
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `create_at` date NOT NULL,
  `is_paid` bool NOT NULL,
  `total_amount` int(11) NOT NULL,
  `discount_amount` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`
  (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CREATE=utf8
```
## OrderDetails
  - order_id (FK)
  - product_id (FK)
  - quantity
  - price

```
 CREATE TABLE `orderdetails` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  KEY `order_id` (`order_id`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`
  (`product_id`)
    ) ENGINE=InnoDB DEFAULT CREATE=utf8 
```
## LendBook
  - customer_id (FK)
  - amount
  - created_at
  - isSettled
  - closed_at

```
 CREATE TABLE `lendbook` (
  `customer_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `closed_at` date NOT NULL,
  `is_settled` bool NOT NULL,
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `lendbook_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers`
  (`customer_id`)
    ) ENGINE=InnoDB DEFAULT CREATE=utf8 
```


A procedure to add accounts after creating a account;

```
  DELIMITER $$

CREATE PROCEDURE CreateAccount(
    fname VARCHAR(255), 
    lname VARCHAR(255),
    phone VARCHAR(25),
    description VARCHAR(255)
)
BEGIN
    DECLARE l_account_id INT DEFAULT 0;
    
    START TRANSACTION;
    -- Insert account data
    INSERT INTO accounts(first_name, last_name)
    VALUES(fname, lname);
    
    -- get account id
    SET l_account_id = LAST_INSERT_ID();
    
    -- insert phone for the account
    IF l_account_id > 0 THEN
	INSERT INTO phones(account_id, phone, description)
        VALUES(l_account_id,phone,description);
        -- commit
        COMMIT;
     ELSE
	ROLLBACK;
    END IF;
END$$

DELIMITER ;
```


