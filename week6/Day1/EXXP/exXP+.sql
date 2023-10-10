-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students (
-- id SERIAL PRIMARY KEY,
-- last_name VARCHAR(50),
-- first_name VARCHAR(50),
-- birth_date DATE 
-- )
set datestyle = dmy
INSERT INTO students (id , first_name , last_name , birth_date) /* id qeyd olunmur add etdiyimiz columnlari qeyd edirik */
VALUES ('Marc' , 'Benichu' , '02/11/1998'),
('Yoan' , 'Cohen' , '03/12/2010'),
('Amelia' , 'Dux' , '07/04/1996'),
('David' , 'Grez' , '14/06/2003'),
('Omer' , 'Simpson' , '03/10/1980')


select * from students

select first_name , last_name from students
where id=2

select first_name , last_name from students
where first_name='Marc' AND last_name='Benichu'

select first_name , last_name from students
where first_name='Marc' OR last_name='Benichu'


select first_name , last_name from students
where first_name like '%a%'
-- !!!
select first_name , last_name from students
where first_name like '%a%' /* yalniz ortadaki a */
select first_name , last_name from students
where first_name like 'A%' /* first letter a */
select first_name , last_name from students
where first_name ilike '%a%' /* hem middle hem first letter a Caseinsensitive */
-- !!!


select * from students where birth_date>'01/01/2000'
