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


SELECT * FROM rental WHERE return_date IS NULL
SELECT * FROM film  ORDER BY rental_duration ASC
SELECT * FROM customer

--Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
SELECT rental.inventory_id ,rental.return_date, inventory.inventory_id , inventory.film_id , film.film_id,film.title
FROM (rental join inventory ON inventory.inventory_id=rental.inventory_id )
INNER JOIN film
ON film.film_id = inventory.film_id  where return_date is NULL
 --Get a list of all the Action films with Joe Swank.
SELECT category.category_id , category.name ,film_category.film_id , film.film_id ,film.title, film_actor.actor_id , actor.actor_id , actor.first_name ,actor.last_name
FROM category 
JOIN film_category ON category.category_id=film_category.category_id 
JOIN film ON film_category.film_id=film.film_id 
 JOIN film_actor ON film.film_id=film_actor.film_id 
JOIN actor
ON film_actor.actor_id=actor.actor_id WHERE name = 'Action' AND first_name = 'Joe' AND last_name = 'Swank'



