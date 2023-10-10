-- Table: public.actors

-- DROP TABLE IF EXISTS public.actors;

-- CREATE TABLE IF NOT EXISTS public.actors
-- (
--     actor_id integer NOT NULL DEFAULT nextval('actors_actor_id_seq'::regclass),
--     first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
--     last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
--     birthdate date NOT NULL,
--     number_oscars smallint NOT NULL,
--     CONSTRAINT actors_pkey PRIMARY KEY (actor_id)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.actors
--     OWNER to postgres;

CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
--it create table 
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


 SELECT * FROM SecondTab 
-- ///-- it will execute 2 row one is 5 other is null
SELECT * FROM FirstTab


 SELECT * 
    FROM  FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

  SELECT * 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )


 SELECT * 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
	
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
	
 SELECT COUNT(*) from FirstTab WHERE id IS NULL












