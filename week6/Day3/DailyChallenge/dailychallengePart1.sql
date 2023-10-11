-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

--Create 2 tables : Customer and Customer profile. They have a One to One relationship.
CREATE TABLE customer (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50) NOT NULL
)

CREATE TABLE customer_profile(
id  INTEGER NOT NULL,
isLoggedIn BOOLEAN DEFAULT false,
 CONSTRAINT fk_id FOREIGN KEY (id) REFERENCES customer (id)
)

INSERT INTO customer(first_name,last_name) 
VALUES ('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive')

INSERT INTO customer_profile(id , isLoggedIn)
VALUES  ((SELECT id FROM customer WHERE first_name='John' ) , true),
  ((SELECT id FROM customer WHERE first_name='Jerome' ),false )


SELECT customer_profile.isLoggedIn , customer.first_name
FROM customer
inner JOIN customer_profile
on customer.id = customer_profile.id


SELECT customer_profile.isLoggedIn , customer.first_name
FROM customer
FULL JOIN customer_profile
on customer.id = customer_profile.id


SELECT* FROM customer_profile













