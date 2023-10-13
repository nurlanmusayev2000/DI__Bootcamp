-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

SELECT * FROM employees

--Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

SELECT first_name ,last_name , salary FROM employees WHERE salary BETWEEN 10000 AND 15000

--Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

SELECT first_name ,last_name , hire_date FROM employees WHERE hire_date > '01-01-1987'

--Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
 
SELECT * FROM employees WHERE first_name like '%c%' AND first_name like '%e%'

--Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.


SELECT * FROM employees
SELECT * FROM jobs

SELECT employees.last_name , jobs.job_title , employees.salary
FROM employees
JOIN jobs
ON employees.job_id = jobs.job_id WHERE jobs.job_id != 9 AND jobs.job_id != 17 AND salary !=4500 AND salary !=10000 AND salary !=15000


--Write a query to display the last names of all employees whose last name contains exactly six characters.
SELECT last_name FROM employees WHERE length(last_name)=6

--Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.

SELECT last_name FROM employees WHERE SUBSTRING(last_name FROM 3 FOR 1) = 'e';

--Write a query to display the jobs title appearing in the employees table.

SELECT employees.*,  jobs.job_title  FROM employees
FULL JOIN jobs
on jobs.job_id = employees.job_id

--Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.

select * FROM employees WHERE last_name = 'King'  OR last_name = 'Scott'


