-- Работаем с базой данных sakila.
USE sakila;

/* Вывести названия фильмов с расшифровкой рейтинга для каждого. Рейтинги описаны здесь.
В таблице film хранятся годы рейтингов. Нужно воспользоваться оператором case чтобы определить для 
каждого кода условие, по которому будет выводится его развернутое описание (1 предложение).
*/ 
SELECT title AS film_title, rating,
CASE rating
	WHEN 'G' THEN 'General Audiences: All ages admitted.'
    WHEN 'PG' THEN 'Parental Guidance: Some material may not be suitable for children.'
	WHEN 'PG-13' THEN 'Parents Strongly Cautioned: Some material may be inappropriate for children under 13.'
    WHEN 'R' THEN 'Restricted: Under 17 requires accompanying parent or adult guardian.'
    WHEN 'NC-17' THEN 'No One 17 and Under Admitted: Explicit content.'
END AS Rating_description
FROM sakila.film;

-- Выведите количество фильмов в каждой категории рейтинга. Используем group by. 
SELECT COUNT(t1.title) AS count_films, t3.name AS category_name
FROM film t1
JOIN film_category t2 ON t1.film_id = t2.film_id
JOIN category t3 ON t2.category_id = t3.category_id
GROUP BY t3.name;

/* Используя оконные функции и partition by, выведите список названий фильмов, 
рейтинг и количество фильмов в каждом рейтинге. Объясните, чем отличаются результаты предыдущего запроса и запроса в этой задаче.
*/
SELECT title, rating, COUNT(title)
OVER (PARTITION BY rating) AS count_films_in_rating
FROM film;
/* В запросе с GROUP BY мы группируем данные по name (или другой категории), и в результате получаем только одну строку на каждое уникальное имя.
В запросе с оконной функцией мы не группируем данные, а выполняем операцию подсчета по каждому фильму, при этом сохраняя все строки. Для каждого фильма 
будет отображаться его название, рейтинг и общее количество фильмов с таким же рейтингом.
*/

-- Изучите таблицы payment и customer. Выведите список всех платежей с указанием имени и фамилии каждого заказчика, датой платежа и суммой.
SELECT t1.first_name, t1.last_name, t2.payment_date, t2.amount 
FROM customer t1
JOIN payment t2 ON t1.customer_id = t2.customer_id;

-- Поменяйте предыдущий запрос так, чтобы дата выводилась в формате “число, название месяца, год” (без времени).
SELECT t1.first_name, t1.last_name, DATE_FORMAT(t2.payment_date, '%d %M %Y' ) AS payment_date, t2.amount 
FROM customer t1
JOIN payment t2 ON t1.customer_id = t2.customer_id;
