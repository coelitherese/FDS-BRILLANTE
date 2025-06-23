SHOW DATABASES;

CREATE DATABASE UA_ESHOP;

-- Select a db -- 
USE UA_ESHOP;

CREATE TABLE users(
	user_id INT, 
    first_name VARCHAR(100),
    last_name VARCHAR (100),
    password VARCHAR (50),
    email VARCHAR (100),
    date_registered DATE
);

SHOW TABLES;
DESCRIBE TABLE users;

CREATE TABLE prod(
	product_id INT,
	product_name VARCHAR (100)
);

-- renaming a table --
ALTER TABLE prod RENAME TO products;  

SHOW TABLES;
DESCRIBE TABLE products;

-- add new column--
ALTER TABLE products 
ADD COLUMN 
description VARCHAR (200), 
ADD COLUMN products DECIMAL(10, 2), 
ADD COLUMN stocks INT, 
ADD COLUMN date_added DATE;

ALTER TABLE products 
ADD COLUMN test VARCHAR (200);

DESC products;

#renaming a table column
ALTER TABLE products 
RENAME COLUMN test TO brand;

#modifying table column
ALTER TABLE products
MODIFY COLUMN brand INT NOT NULL;

# deleting a column 
ALTER TABLE products
DROP COLUMN brand;

DESC products;

# deleting a whole table
DROP TABLE products; 

# deleting the whole database
DROP DATABASE UA_ESHOP;