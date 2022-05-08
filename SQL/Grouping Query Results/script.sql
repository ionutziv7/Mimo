SELECT COUNT(grade)
FROM test
WHERE grade = 'A';

SELECT grade, COUNT(*)
FROM test
GROUP BY grade;

SELECT grade
FROM test
GROUP BY grade;

SELECT COUNT(*)
FROM test;

SELECT COUNT(country)
FROM user
WHERE country = 'England';

SELECT email, COUNT(*)
FROM user
GROUP BY country;

SELECT COUNT(*)
FROM user;

SELECT COUNT(*)
FROM test
GROUP BY grade;

SELECT grade, COUNT(*)
FROM test
GROUP BY grade;

SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade;

SELECT COUNT(*)
FROM user
GROUP BY country;

SELECT country, COUNT(*)
FROM test
GROUP BY grade;

SELECT country, COUNT(*) AS users
FROM user
GROUP BY country;

SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING COUNT(*) > 1;

SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING grade <> 'A';

SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING students <> 2;

SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING country LIKE 'E%';

SELECT country, COUNT(*) AS users
FROM user
GROUP BY country
HAVING country = 'Spain';