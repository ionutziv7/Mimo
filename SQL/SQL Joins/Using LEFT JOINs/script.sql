SELECT *
FROM student
INNER JOIN enrolled
ON student.id = enrolled.student_id;

SELECT *
FROM student
LEFT JOIN enrolled
ON student.id = enrolled.student_id;

SELECT student.name, enrolled.class
FROM student
LEFT JOIN enrolled
ON student.id = enrolled.student_id;

SELECT s.name, e.class
FROM student AS s
LEFT JOIN enrolled AS e
ON s.id = e.student_id;

SELECT *
FROM artist
LEFT JOIN album
ON artist.id = album.artist_id;

