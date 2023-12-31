-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50) ,
    price SMALLINT 
);

SELECT * FROM items 
SELECT * FROM product_orders

-- Create the 'product_orders' table
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE ,
    customer_name VARCHAR(50) ,
    item_id INT REFERENCES items(item_id),
    quantity INT 
);

-- Insert data into the 'items' table
INSERT INTO items (item_name, price)
VALUES ('Widget', 10.99),
       ('Gadget', 19.99),
       ('Doohickey', 7.49);

-- Insert data into the 'product_orders' table
INSERT INTO product_orders (order_date, customer_name, item_id, quantity)
VALUES 	   ('2023-08-14', 'Samba ElKhadzi', 2, 8)

CREATE FUNCTION given_price(cus_name varchar(50))
RETURNS smallint as $birthdate$
BEGIN 
return(SELECT items.price  FROM items JOIN product_orders ON product_orders.item_id = items.item_id where product_orders.customer_name=cus_name )
END;
$birthdate$ LANGUAGE plpgsql;


SELECT * FROM given_price('John')
	  --??????????????????????????
	   
	   
	   
	   
	   
	   