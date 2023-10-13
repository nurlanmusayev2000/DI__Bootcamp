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
	
	select * from actors
	
	CREATE or REPLACE FUNCTION age_actor(fn varchar(50), lan varchar(100)) 
RETURNS date AS $birthdate$
BEGIN
   RETURN(SELECT birthdate FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
END;
$birthdate$ LANGUAGE plpgsql;

SELECT * FROM age_actor('George', 'Clooney');


CREATE or REPLACE FUNCTION current_age_actor(fn varchar(50), lan varchar(100)) RETURNS int AS $current_age$
declare
    current_age integer;
    birthdate date;
    now_date date := CURRENT_DATE;
BEGIN
   birthdate := (SELECT age FROM actors WHERE actors.first_name = fn AND actors.last_name=lan);
   current_age := DATE_PART('year', now_date) - DATE_PART('year', birthdate);
   RETURN current_age;
END;
$current_age$ LANGUAGE plpgsql;












	