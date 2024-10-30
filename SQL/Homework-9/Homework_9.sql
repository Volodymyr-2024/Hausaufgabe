-- Вывести текущую дату и время.
SELECT NOW() AS date_now;

-- Вывести текущий год и месяц
SELECT YEAR(NOW()) AS year_now, MONTH(NOW()) AS month_now;

-- Вывести текущее время
SELECT CURRENT_TIME();

-- Вывести название текущего дня недели
SELECT MONTHNAME(NOW()) AS month_current_name;

-- Вывести номер текущего месяца
SELECT MONTH(NOW()) AS month_current;

-- Вывести номер дня в дате “2020-03-18”
SELECT DAY('2020-03-18') AS day_nummer;

-- Подключиться к базе данных shop (которая находится на удаленном сервере).
USE shop;

-- Определить какие из покупок были совершены апреле (4-й месяц)
SELECT *
FROM ORDERS
WHERE MONTH(ODATE) = 4;

-- Определить количество покупок в 2022-м году
SELECT COUNT(*) AS count_orders 
FROM ORDERS
WHERE YEAR(ODATE) = 2022;

/* Определить, сколько покупок было совершено в каждый день. Отсортировать строки в порядке
возрастания количества покупок. Вывести два поля - дату и количество покупок
*/
SELECT COUNT(*) AS count_orders, ODATE AS date_orders
FROM ORDERS
GROUP BY ODATE
ORDER BY count_orders ASC;

-- Определить среднюю стоимость покупок в апреле
SELECT AVG(AMT) AS avg_price
FROM ORDERS
WHERE MONTH(ODATE) = 4;