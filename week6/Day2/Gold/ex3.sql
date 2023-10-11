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

select * from customers
select * from items
select * from purchases

CREATE TABLE purchases(
id SERIAL PRIMARY KEY,
customer_id INTEGER,
item_id INTEGER,
quantity_purchased INTEGER,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
FOREIGN KEY (item_id) REFERENCES items(item_id)
)


INSERT INTO purchases(quantity_purchased,item_id ,customer_id ) 
VALUES(
	2 ,
	(SELECT item_id FROM items WHERE item_name = 'Small Desk' ),
(SELECT customer_id FROM customers WHERE customer_name = 'Greg' AND customer_lastname='Jons')
) 

DELETE FROM purchases where id=7


SELECT customers.customer_name , customers.customer_lastname , purchases.quantity_purchased
from customers 
INNER JOIN purchases 
on customers.customer_id= purchases.customer_id WHERE customers.customer_id =5



