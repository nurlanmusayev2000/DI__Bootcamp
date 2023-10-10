-- -- SCHEMA: public

-- -- DROP SCHEMA IF EXISTS public ;

-- CREATE SCHEMA IF NOT EXISTS public
--     AUTHORIZATION pg_database_owner;

-- COMMENT ON SCHEMA public
--     IS 'standard public schema';

-- GRANT USAGE ON SCHEMA public TO PUBLIC;

-- GRANT ALL ON SCHEMA public TO pg_database_owner;


select * from actors

select avg(number_oscars) as avarage_oscars from actors
select  distinct number_oscars  from actors 

select * from actors where age > '01/01/1970'

select * from actors where first_name in ( 'David', 'Margot' , 'Will')

-- Update the first name of Matt Damon to "Maty"
-- Update the number of oscars of George Clooney to 4, and return the updated record
-- Rename the 'age' column by 'birthdate'
-- Delete one actor and return it



update actors set first_name = 'Maty' where first_name = 'Matt'
update actors set number_oscars = 4 where first_name = 'George' And last_name='Clooney' returning *
alter table actors Rename column age to birthdate 
Delete from  actors where last_name = 'Rock' returning *

CREATE TABLE movies(
movie_id SERIAL,
movie_title VARCHAR (50) NOT NULL,
movie_story TEXT,
actor_playing_id INTEGER,
PRIMARY KEY (movie_id),
FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
);
INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
    ( 'Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
    (SELECT actor_id from actors WHERE first_name='Scharlet')),
    ( 'Oceans Eleven', 
    'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Jason'));
	

--  Create another table producers, with a foreign key : the id of a movie. The producers table is linked to the movies table
-- Insert some record
-- Display with INNER JOIN
select * from actors
select * from movies
select * from producers

delete from movies where movie_id =2



Create table producers (
	producers_id SERIAL ,
	producer_name varchar(50),
	movies_id integer,
	PRIMARY KEY (producers_id),
	FOREIGN KEY (movies_id) REFERENCES movies (movie_id)	
)

insert into producers (producer_name,movies_id)
values('Nurlan',(SELECT actor_playing_id from movies WHERE movie_title='Good Will Hunting')),

SELECT movies.movie_title , movies.movie_id , producers.producers_id
FROM movies
INNER JOIN producers
ON movies.movie_id = producers.movies_id;



