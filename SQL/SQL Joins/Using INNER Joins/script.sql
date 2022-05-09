SELECT student.name AS student,
enrolled.class
FROM student
INNER JOIN enrolled
ON student.id = enrolled.student_id;

SELECT * 
FROM student AS s
INNER JOIN enrolled AS e
ON student.id = enrolled.student_id;

SELECT s.name, e.class
FROM student AS s
INNER JOIN enrolled AS e
ON s.id = e.student_id;

SELECT art.name, alb.title
FROM artist AS art
INNER JOIN album AS alb
ON art.id = alb.artist_id;