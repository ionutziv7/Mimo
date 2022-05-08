SELECT MAX(price)
FROM ticket;

SELECT MIN(price)
FROM ticket;

SELECT MIN(price) AS cheapest
FROM ticket;

SELECT MIN(km)
FROM running_distance;

SELECT MIN(km) AS shorter_distance
FROM running_distance;

SELECT MAX(km) 
FROM running_distance;

SELECT MAX(km) AS longest_distance
FROM running_distance;

SELECT AVG(price)
FROM ticket;

SELECT AVG(price) AS average_price
FROM ticket;

SELECT AVG(km) AS average_distance
FROM running_distance;