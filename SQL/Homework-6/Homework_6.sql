-- Подключитесь к базе данных world (которая находится на удаленном сервере)
USE world;

-- Выведите список стран с языками, на которых в них говорят. 
SELECT t1.name, t2.language
FROM country t1
INNER JOIN countrylanguage t2
ON t1.code = t2.countrycode;

-- Выведите список городов с их населением и названием стран
SELECT t1.name AS name_city, t1.population, t2.name AS name_country
FROM city t1
INNER JOIN country t2
ON t1.countrycode = t2.code;

-- Выведите список городов в South Africa
SELECT t1.name
FROM city t1
INNER JOIN country t2
ON t1.countrycode = t2.code AND t2.region = 'Southern Africa';

/*Выведите список стран с названиями столиц. Подсказка: в таблице country есть поле Capital,
которое содержит номер города из таблицы City.
*/
SELECT t1.name AS name_country, t2.name AS name_capital
FROM country t1
INNER JOIN city t2
ON t1.capital = t2.id;

-- Измените запрос 4 таким образом, чтобы выводилось население в столице. 
SELECT t1.name, t1.population
FROM city t1
INNER JOIN country t2
ON t1.countrycode = t2.code AND t2.region = 'Southern Africa';

-- Напишите запрос, который возвращает название столицы United States
SELECT t2.name
FROM country t1
INNER JOIN city t2
ON t1.capital = t2.id AND t1.name = "United States";

-- Используя базу hr_data.sql, вывести имя, фамилию и город сотрудника.
USE hr;
SELECT t1.first_name, t1.last_name, t3.city
FROM employees t1
INNER JOIN departments t2
ON t1.department_id = t2.department_id
INNER JOIN locations t3
ON t2.location_id = t3.location_id;

-- Используя базу hr_data.sql, вывести города и соответствующие городам страны.
SELECT t1.city, t2.country_name
FROM locations t1
INNER JOIN countries t2
ON t1.country_id = t2.country_id;