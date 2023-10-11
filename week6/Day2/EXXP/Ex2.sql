-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

SELECT* FROM customer
SELECT (first_name , last_name) as full_name from customer
select DISTINCT create_date from customer
SELECT first_name ,last_name , email , address_id  FROM customer ORDER BY first_name DESC
SELECT film_id , title, description , release_year , rental_rate FROM film ORDER BY rental_rate ASC
select address , phone from address WHERE district = 'Texas'
SELECT * FROM film where film_id BETWEEN 15 AND 150 /* either 15 or 150 --OR */
SELECT film_id , title, description , release_year , rental_rate FROM film WHERE title like 'In%'
SELECT * FROM film  ORDER BY rental_rate limit 10 offset 10
select * from customer
select * from payment


SELECT customer.first_name ,customer.last_name , payment.amount , payment.payment_date , customer.customer_id
FROM customer 
INNER JOIN payment
ON payment.customer_id = customer.customer_id order by customer.customer_id ASC







select film_id , inventory_id  FROM inventory where film_id ='null' /* IS NULL */
select title FROM film where film_id NOT IN(SELECT film_id FROM inventory)







select * FROM country
SELECT * FROM city

SELECT country.country , city.city
FROM country
INNER JOIN city
ON country.country_id=city.country_id










