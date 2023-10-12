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

SELECT * FROM  employees
SELECT * FROM  DEPARTMENTS

--Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
SELECT first_name AS First , last_name AS Last FROM EMPLOYEES
--Write a query to get unique departments ID from the employee table (ie. without duplicates).
SELECT  DISTINCT department_id  FROM EMPLOYEES

--Write a query to get the details of all employees from the employee table, do so in descending order by first name.
SELECT * FROM employees ORDER BY first_name DESC

--Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
SELECT first_name ,last_name , salary , salary*15/100 AS PF FROM employees

--Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT employee_id , first_name , last_name , salary FROM employees ORDER BY salary ASC

--Write a query to get the total sum of all salaries paid to the employees.
SELECT SUM(salary) AS total_salaries FROM employees

--Write a query to get the maximum and minimum salaries paid to the employees.

SELECT MAX(salary) AS max_salary  , MIN(salary ) AS min_salary FROM employees

--Write a query to get the average salary paid to the employees.

SELECT AVG(salary) AS avg_salaries FROM employees

--Write a query to get the number of employees working in the company.

SELECT COUNT(first_name) AS all_employees FROM employees

--Write a query to get all the first names from the employees table in upper case.
SELECT Upper(first_name) FROM employees

--Write a query to get the first three characters of each first name of all the employees in the employees table.

SELECT 	substring(first_name from 1 for 3) FROM employees

--Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.

SELECT concat(first_name , ' ' , last_name) FROM employees

--Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.

SELECT concat(first_name , ' ' , last_name) as f_name , char_length(first_name) + char_length(last_name)  FROM employees

--Write a query to check whether the first_name column of the employees table contains any numbers.

SELECT first_name FROM employees WHERE first_name ~ '[0-9]'

SELECT * FROM employees LIMIT 10;



