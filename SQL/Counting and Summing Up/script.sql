SELECT COUNT(item) 
FROM wishlist;

SELECT COUNT(*)
FROM wishlist;

SELECT COUNT(*) AS items
FROM wishlist;

SELECT COUNT(*)
FROM team;

SELECT COUNT(*) AS team_size
FROM team;

SELECT COUNT(price)
FROM wishlist;

SELECT COUNT(DISTINCT item)
FROM wishlist;

SELECT COUNT(name)
FROM team;

SELECT COUNT(DISTINCT name)
FROM team;

SELECT SUM(price)
FROM wishlist;