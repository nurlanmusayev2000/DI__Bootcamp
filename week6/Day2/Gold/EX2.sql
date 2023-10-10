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

UPDATE students SET birth_date = '02/11/1998' where last_name='Benichou'
SELECT * FROM students

UPDATE students SET last_name='Guez' WHERE last_name = 'Grez' 

DELETE FROM students WHERE first_name = 'Simpson' AND last_name = 'Benichou';

SELECT COUNT(id) as countofStudents from students

SELECT birth_date , COUNT (birth_date) from students where birth_date>'01/01/2000' GROUP BY birth_date

ALTER TABLE students ADD COLUMN math_grade INTEGER 
SELECT * FROM students

UPDATE students SET math_grade = 40 WHERE id=6
UPDATE students SET math_grade = 90 WHERE id=2 OR id=4

SELECT  COUNT(id) AS higher_scores FROM students where  math_grade>83

INSERT INTO students(last_name , first_name , birth_date , math_grade)
VALUES('Simpson','Omer','1980-10-03',70)

SELECT first_name , COUNT(math_grade) AS total_grade FROM students GROUP BY first_name

SELECT SUM(math_grade) from students





















