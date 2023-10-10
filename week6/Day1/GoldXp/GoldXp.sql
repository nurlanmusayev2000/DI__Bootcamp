-- Table: public.students

-- DROP TABLE IF EXISTS public.students;

-- CREATE TABLE IF NOT EXISTS public.students
-- (
--     id integer NOT NULL DEFAULT nextval('students_id_seq'::regclass),
--     last_name character varying(50) COLLATE pg_catalog."default",
--     first_name character varying(50) COLLATE pg_catalog."default",
--     birth_date date,
--     CONSTRAINT students_pkey PRIMARY KEY (id)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.students
--     OWNER to postgres;

select * from students

DELETE FROM students WHERE last_name = 'Benichu'

--1 Fetch the first four students. You have to order the four students alphabetically by last_name.

select * from students where id<13 order by last_name asc

select * from students order by birth_date desc limit 1
select * from students limit 3 offset 2