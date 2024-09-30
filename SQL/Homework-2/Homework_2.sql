-- Используя https://github.com/it-career-hub/MySQL_databases/blob/main/hr_data.sql, вывести список всех сотрудников.
SELECT * FROM hr.employees;

/*Используя операторы case/when/end, изменить запрос так, чтобы результатом был только один столбец, назовите его SALARY_GROUP
 и оно будет принимать значение 1 если зп сотрудника больше 10000 и значение 0, если меньше.
 */
SELECT 
CASE
WHEN salary > 10000 THEN 1
ELSE 0
END AS SALARY_GROUP
FROM hr.employees;

-- Ответить одним предложением: почему выводится только один столбец?
-- Выводится один столбец потому, что в запросе указан оператор CASE, который возвращает только один столбец

-- Изменить запрос, так, чтобы вывелось два столбца: имя сотрудника и новое поле SALARY_GROUP.
SELECT first_name,
CASE
WHEN salary > 10000 THEN 1
ELSE 0
END AS SALARY_GROUP
FROM hr.employees;

-- Вывести среднюю зарплату для департаментов с номерами 60, 90 и 100 используя составное условие.
SELECT department_id, AVG(salary) AS average_salary
FROM hr.employees
WHERE department_id IN (60, 90, 100)
GROUP BY department_id;

/* Разделить уровни (level) сотрудников на junior < 10000, 10000 < mid < 15000, senior > 15000 в зависимости
 от их зарплаты. Вывести список сотрудников (first_name, last_name, level).
 */
 SELECT first_name, last_name,
CASE
WHEN salary > 15000 THEN "senior"
WHEN salary > 10000 THEN "mid"
ELSE "junior"
END AS level
FROM hr.employees;

/* Посмотреть содержимое таблицы jobs. Написать запрос c использованием оператора case/when/end,
 который возвращает 2 столбца: job_id, payer_rank, где столбец payer_rank формируется по правилу:
 если максимальная зарплата больше 10000, то “high_payer”, если меньше, то “low payer”.
 */
 SELECT job_id,
CASE
WHEN max_salary > 10000 THEN "high_payer"
ELSE "low payer"
END AS payer_rank
FROM hr.jobs;

-- Переписать этот запрос с использованием оператора IF.
SELECT job_id,
IF( max_salary > 10000, "high_payer", "low payer") AS payer_rank
FROM hr.jobs;

/* Поменять предыдущий запрос так, чтобы выводилось 3 столбца, к двум существующим добавьте max_salary 
и отсортировать результат по убыванию.
*/
SELECT job_id, max_salary,
IF( max_salary > 10000, "high_payer", "low payer") AS payer_rank
FROM hr.jobs
ORDER BY max_salary DESC; 