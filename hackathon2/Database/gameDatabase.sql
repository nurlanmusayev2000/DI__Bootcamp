-- Database: project

-- DROP DATABASE IF EXISTS project;

-- CREATE DATABASE project
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1254'
--     LC_CTYPE = 'English_United States.1254'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
username varchar(50),
email varchar(50)
)

CREATE TABLE scores(
score_id serial ,
scores integer,
primary Key (score_id),
constraint fk_score_id Foreign key (score_id) references users (id)
)


CREATE table questions(
id serial PRIMARY KEY,
question TEXT Not null
)
CREATE TABLE answers(
id serial Primary KEy,
A varchar(50) not null,
B varchar(50) not null,
C varchar(50) not null,
D varchar(50) not null
)
CREATE TABLE correctAnswer(
answer_id serial,
answer varchar(50) not null,
PRIMARY KEY(answer_id),
constraint fk_answer_id FOREIGN KEY (answer_id) references questions(id)
)

SELECT * FROM users
SELECT * FROM scores
SELECT * FROM questions
SELECT * FROM answers
SELECT * FROM correctAnswer


INSERT INTO questions (question)
VALUES('On kıtadan oluşan İstiklal Marşı’nın tamamında, bu kelimelerden hangisi diğerlerinden daha az geçer?')

INSERT INTO answers(a,b,c,d)
VALUES ('Vatan','Kan','Toprak','Yurt')

INSERT INTO correctAnswer(answer)
VALUES ('Toprak')


select * from answers where id =1 






