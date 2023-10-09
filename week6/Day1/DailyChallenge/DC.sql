-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1254'
    LC_CTYPE = 'English_United States.1254'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
select*from actors
select count(actor_id) from actors 
insert into actors (first_name  , age , number_oscars)
values('Nurlan' ,  '01/01/2000' , 5)