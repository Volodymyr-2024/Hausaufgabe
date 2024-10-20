-- Подключитесь к базе данных hr (которая находится на удаленном сервере)
USE hr;

-- Выведите количество сотрудников в базе
SELECT COUNT(*) AS count_employees
FROM hr.employees;

-- Выведите количество департаментов (отделов) в базе
SELECT COUNT(*) AS count_departmens
FROM hr.departments;

-- Подключитесь к базе данных World (которая находится на удаленном сервере).
USE world;

-- Выведите среднее население в городах Индии (таблица City, код Индии - IND)
SELECT AVG(Population) AS average_population
FROM world.city
WHERE CountryCode IN ("IDN");

-- Выведите минимальное население в индийском городе и максимальное.
SELECT MIN(Population) AS min_population
FROM world.city
WHERE CountryCode IN ('IDN');

-- Выведите самую большую площадь территории. 
SELECT MAX(SurfaceArea) AS max_surface_area
FROM world.country;

-- Выведите среднюю продолжительность жизни по странам. 
SELECT AVG(LifeExpectancy) AS average_life_expectancy 
FROM world.country;

-- Найдите самый населенный город (подсказка: использовать подзапросы)
SELECT Name, Population
FROM world.city
WHERE Population = (SELECT MAX(Population) FROM world.city);