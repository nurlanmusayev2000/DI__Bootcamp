-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
FULL OUTER JOIN movies
ON actors.actor_id = movies.actor_playing_id;


CREATE TABLE countries(
counry_d SERIAL PRIMARY KEY,
country_name TEXT
)

INSERT INTO countries(country_name)
VALUES ('Azerbaijan'),
('Turkiye'),
('Poland'),
('Hungary'),
('Czech'),
('Slovakia'),
('Germany'),
('Austria')

select * from countries
select * from actors
SELECT actors.first_name , actors.last_name , countries.country_name
FROM actors
INNER JOIN countries
ON actors.actor_id = countries.counry_d


SELECT actors.first_name , actors.last_name , countries.country_name
FROM actors
LEFT OUTER JOIN countries
ON actors.actor_id = countries.counry_d

SELECT actors.first_name , actors.last_name , countries.country_name
FROM actors
RIGHT OUTER JOIN countries
ON actors.actor_id = countries.counry_d

SELECT actors.first_name , actors.last_name , countries.country_name
FROM actors
FULL OUTER JOIN countries
ON actors.actor_id = countries.counry_d














