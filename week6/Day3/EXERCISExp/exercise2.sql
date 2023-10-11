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

--Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM language 
select * from film
select * from customer_review

UPDATE film SET language_id = 2 where film_id = 3 or film_id=5 or film_id = 7

--Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE customer_review

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select * from rental
select count(rental_date) from rental where return_date IS NULL
select * from rental where return_date IS NULL

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)????


--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
Select * from film where description ilike '%sumo wrestler%'
SELECT * FROM film
SELECT * FROM film_actor

SELECT film.title ,film.description , film_actor.actor_id , film_actor.film_id , actor.actor_id , actor.first_name ,actor.last_name
FROM (film JOIN film_actor ON film.film_id =film_actor.film_id )
JOIN actor ON actor.actor_id = film_actor.actor_id where description ilike '%sumo wrestler%' AND first_name = 'Penelope' AND last_name = 'Monroe'

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.

SELECT * FROM film WHERE description ilike '%documentary%' AND rating = 'R' AND length <60

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT * FROM rental
SELECT * FROM payment
SELECT * FROM customer
SELECT * FROM film


SELECT payment.amount , customer.first_name , customer.last_name , rental.return_date
FROM (payment JOIN customer ON payment.customer_id=customer.customer_id)
JOIN rental ON rental.customer_id=customer.customer_id WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND amount>4.00 AND return_date BETWEEN '2005-07-28' AND '2005-08-01'

































