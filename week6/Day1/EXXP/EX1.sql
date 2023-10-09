-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


CREATE TABLE items(
item_id SERIAL PRIMARY KEY,
item_name VARCHAR (50) NOT NULL,
item_price INT 
)

CREATE TABLE customers(
customer_id SERIAL PRIMARY KEY,
customer_name VARCHAR(50),
customer_lastname VARCHAR(20)
)


INSERT INTO items (item_name , item_price)
VALUES ('Small Desk' , 100),
('Large Desk' , 300),
('Fan' , 80)



INSERT INTO customers (customer_name , customer_lastname)
VALUES ('Greg' , 'Jons'),
('Sandra' , 'Jones'),
('Scott' , 'Scott'),
('Trevor' , 'Green'),
('Melanie' , 'Johnson')





--1.
select * from items
--2.
select * from items where item_price>80
--3.
select * from items where item_price<300
--4.
select * from customers where customer_lastname='Smith'
select * from customers where customer_lastname='Jones'
select * from customers where customer_name !='Scott'










