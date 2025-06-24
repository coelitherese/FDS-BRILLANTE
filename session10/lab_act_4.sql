# CREATE INITIAL DATABASE #
CREATE DATABASE lab_act_4;
USE lab_act_4;

# create first table: customer #
CREATE TABLE customer(
	customer_id INT,
    first_name VARCHAR (100),
    last_name VARCHAR (100),
    home_address VARCHAR (100),
    email_address VARCHAR (100),
    phone_number INT,
    date_of_birth DATE
);

DESC customer;

# create second table: product #
CREATE TABLE product(
	product_id INT,
    product_name VARCHAR(100),
    quantity INT,
    date_listed DATE,
    number_of_stocks INT,
    product_description VARCHAR (1000)
);

DESC product;

# create third table: shop #
CREATE TABLE shop(
	shop_id INT,
    shop_name VARCHAR (100),
    shop_address VARCHAR (100),
    shop_email VARCHAR (100),
    shop_phone_number INT,
    shop_description VARCHAR (1000),
    date_started DATE,
    number_of_products INT
);

DESC shop;