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

CREATE TABLE book (
book_id SERIAL PRIMARY KEY,
tittle TEXT NOT NULL,
author VARCHAR(50) NOT NULL
)

INSERT INTO book(tittle , author)
VALUES('Alice In Wonderland' , 'Lewis Carroll'),
('Harry Potter' , 'J.K Rowling'),
('To kill a mockingbird' , 'Harper Lee')

CREATE TABLE student(
student_id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
age SMALLINT
)

INSERT INTO student(name , age)
VALUES('John',12),
('Lera', 11),
('Patrick',10),
('Bob',14)

CREATE TABLE library(
borrowed_date DATE,
book_fk_id  integer REFERENCES book(book_id) ON UPDATE CASCADE,
student_fk_id integer  REFERENCES student(student_id) ON DELETE CASCADE,
PRIMARY KEY (book_fk_id,student_fk_id) 
)
set datestyle = dmy

select  * from book
select * From student
select * from library
INSERT INTO library(borrowed_date , book_fk_id , student_fk_id) 
VALUES('12/08/2021',(SELECT book_id FROM book where tittle = 'Harry Potter' ),(SELECT student_id FROM student WHERE name = 'Bob'))

SELECT student.name , book.tittle 
FROM ( student  JOIN library ON library.student_fk_id=student.student_id)
INNER JOIN book
ON book.book_id = library.book_fk_id














