-- Подключиться к базе данных world
USE world;

-- Вывести население в каждой стране. Результат содержит два поля: CountryCode, sum(Population). Запрос по таблице city
SELECT CountryCode, SUM(Population) AS sum_population
FROM city
GROUP BY CountryCode;

-- Изменить запрос выше так, чтобы выводились только страны с населением более 3 млн человек. 
SELECT CountryCode, SUM(Population) AS sum_population
FROM city
GROUP BY CountryCode
HAVING sum_population > 3000000;

-- Сколько всего записей в результате?
SELECT COUNT(*) AS count_record
FROM (
	SELECT CountryCode, SUM(Population) AS sum_population
	FROM city
	GROUP BY CountryCode
	HAVING sum_population > 3000000
) AS population_summary;

-- Поменять запрос выше так, чтобы в результате вместо кода страны выводилось ее название. Подсказка: нужен join таблиц city и country по полю CountryCode
SELECT t2.Name, SUM(t1.Population) AS sum_population
FROM city t1
JOIN country t2
ON t1.CountryCode = t2.Code
GROUP BY CountryCode;

-- Вывести количество городов в каждой стране (CountryCode, amount of cities). Подсказка: запрос по таблице city и группировка по CountryCode.
SELECT CountryCode, COUNT(*) AS count_city
FROM city
GROUP BY CountryCode;

-- Поменять запрос так, чтобы вместо кодов стран, было названия стран.
SELECT t2.Name, COUNT(*) AS count_city
FROM city t1
JOIN country t2
ON t1.CountryCode = t2.Code
GROUP BY CountryCode;

/* Поменять запрос так, чтобы выводилось среднее количество городов в стране. Подсказка: разделите задачу на несколько подзадач. 
Например, сначала вывести код страны и количество городов в каждой стране.  Затем сделать join получившегося результата с запросом, 
где высчитывается среднее от количества городов. Потом добавить join, который добавит имена стран, вместо кода.
*/
  
SELECT t2.Name AS CountryName, t1.CountryCode, t1.count_city, avg_data.avg_count_city
FROM (
    SELECT CountryCode, COUNT(*) AS count_city
    FROM city
    GROUP BY CountryCode
) AS t1
JOIN country t2 ON t1.CountryCode = t2.Code
JOIN (
    SELECT AVG(count_city) AS avg_count_city
    FROM (
        SELECT CountryCode, COUNT(*) AS count_city
        FROM city
        GROUP BY CountryCode
    ) AS city_counts
) AS avg_data;


