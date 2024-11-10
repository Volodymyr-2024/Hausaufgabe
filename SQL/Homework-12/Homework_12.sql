-- Работаем с базой world
USE world;

-- Вывести количество городов для каждой страны. Результат должен содержать CountryCode, CityCount (количество городов в стране). 
SELECT DISTINCT CountryCode,
COUNT(*) OVER(PARTITION BY CountryCode) AS count_city
FROM city;

-- Поменяйте запрос с использованием джойнов так, чтобы выводилось название страны вместо CountryCode. 
SELECT DISTINCT t2.Name,
COUNT(*) OVER(PARTITION BY CountryCode) AS count_city
FROM city t1
JOIN country t2
ON t1.CountryCode=t2.Code;

-- Используя оконные функции, вывести список стран с продолжительностью жизнью и средней продолжительностью жизни. 
SELECT Name, LifeExpectancy, 
AVG(IFNULL((LifeExpectancy), 0)) OVER() AS avg_life_Expectancy
FROM country;

-- Используя ранжирующие функции, вывести страны по убыванию продолжительности жизни.
SELECT Name, LifeExpectancy,
DENSE_RANK() OVER(ORDER BY LifeExpectancy DESC) AS life_rank
FROM country;

-- Используя ранжирующие функции, вывести третью страну с самой высокой продолжительностью жизни.
SELECT Name, LifeExpectancy, life_rank
FROM (
	SELECT Name, LifeExpectancy,
	DENSE_RANK() OVER(ORDER BY LifeExpectancy DESC) AS life_rank
	FROM country) AS country_rank
WHERE life_rank = 3;