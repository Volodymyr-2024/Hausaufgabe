-- Подключиться к базе данных hr
USE hr;

/* Вывести список region_id, total_countries, где total_countries - количество стран в таблице. 
Подсказка: работаем с таблицей countries, использовать оконную функцию over() и суммировать count(country_id).
*/
SELECT region_id,
COUNT(country_id) OVER() AS count_country
FROM hr.countries;

/*Изменить запрос 2 таким образом, чтобы для каждого region_id выводилось количество стран в этом регионе.
Подсказка: добавить partition by region_id в over().
*/
SELECT DISTINCT region_id,
COUNT(country_id) OVER(PARTITION BY region_id) AS count_country
FROM hr.countries;

/* Работа с таблицей departments. Написать запрос, который выводит location_id, department_name,
dept_total, где dept_total - количество департаментов в location_id.
*/
SELECT location_id, department_name, 
COUNT(*) OVER() AS dept_total
FROM hr.departments;

-- Изменить запрос 3 таким образом, чтобы выводились названия городов соответствующих location_id. 
SELECT t2.city, t1.department_name,  
COUNT(*) OVER() AS dept_total
FROM hr.departments t1
JOIN hr.locations t2
ON t1.location_id = t2.location_id;

/* Работа с таблицей employees. Вывести manager_id, last_name, total_manager_salary, 
где total_manager_salary - общая зарплата подчиненных каждого менеджера (manager_id).
*/
SELECT manager_id, last_name,
SUM(salary) OVER(PARTITION BY manager_id) AS total_salary
FROM hr.employees
WHERE manager_id  IS NOT NULL; 