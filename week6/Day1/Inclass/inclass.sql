-- Table: public.actors

-- DROP TABLE IF EXISTS public.actors;

CREATE TABLE IF NOT EXISTS public.actors
(
    actor_id integer NOT NULL DEFAULT nextval('actors_actor_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    age date NOT NULL,
    number_oscars smallint NOT NULL,
    CONSTRAINT actors_pkey PRIMARY KEY (actor_id)
)

SELECT
* 
FROM
    actors
where actor_id =1 OR actor_id =2 OR actor_id =3 OR actor_id=4
SELECT
* 
FROM
    actors
where actor_id =1 OR actor_id =2 OR actor_id =3 OR actor_id=4
ORDER BY
    last_name desc
	select * from actors where  first_name ilike '%e%'
SELECT actor_id, first_name, last_name, age, number_oscars
	FROM public.actors;