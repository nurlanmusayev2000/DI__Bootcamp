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
--Get a list of all the languages, from the language table.
SELECT * from language
SELECT * from film 
--Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title , film.description , language.name
FROM film
INNER JOIN language
ON film.language_id=language.language_id
--Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title , film.description , language.name
FROM film
RIGHT OUTER JOIN language
ON film.language_id=language.language_id order BY name DESC
--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
id SERIAL PRIMARY KEY ,
name VARCHAR(50)
)

INSERT INTO new_film(name) VALUES ('Avengers'), ('Shawshan Redemption') , ('Green Way') , ('Origin')
SELECT * FROM new_film

--Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE ,
language_id INTEGER,
title_review TEXT,
score SMALLINT,
review_text TEXT,
last_update DATE,
FOREIGN KEY (language_id) REFERENCES language(language_id) 
)

INSERT INTO customer_review(film_id,language_id,title_review , score , review_text ,last_update )
VALUES((SELECT id FROM new_film where name like '%Shawshan%') , (SELECT language_id FROM language where name='English' ),'about Shawshank Redemption' , 10,'aknfdkaenf aksf aoksfniosakf knasfik oaksf okasfn o' , '05/05/2023'),
((SELECT id FROM new_film where name like '%Green%') , (SELECT language_id FROM language where name='English' ),'about Green Way' , 8,'aknfdkaenf aksf aoksfniosakf knasfik oaksf okasfn o' , '08/07/2023'),
((SELECT id FROM new_film where name like '%Avengers%') , (SELECT language_id FROM language where name='English' ),'about Iron Man' , 10,'aknfdkaenf aksf aoksfniosakf knasfik oaksf okasfn o' , '03/02/2023')

-- !!! basda references oldugunu qeyd etdiyimiz ucun yeniden select etmeye ehtiyac yoxdur
-- !(3, 1, 'Focus', 8, 'Guy steels stuff with a bunch of other people', '16/02/2021'),
    --!! (4, 1, 'The big lebowski', 10, 'The Dude, dude', '16/02/2021')

SELECT * FROM customer_review


DELETE FROM new_film WHERE id=2;









