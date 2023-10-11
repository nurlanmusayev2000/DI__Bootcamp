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


SELECT * from film


select rating, COUNT(rating) from film group by rating

SELECT * FROM film WHERE rating='G' OR rating='PG-13' AND length<120 AND rental_rate<3.00 ORDER BY title ASC

SELECT * FROM customer where first_name ='Nurlan'

UPDATE customer SET first_name='Nurlan' , last_name = 'Musayev' , email = 'nurlan.2000.m@gmail.com' where first_name='Jared'





