SELECT * FROM hr.employees WHERE job_id = 'IT_PROG';
SELECT * FROM hr.employees WHERE job_id = 'AD_VP';
SELECT * FROM hr.employees WHERE job_id = 'IT_PROG'
  UNION 
  SELECT * FROM hr.employees WHERE job_id = 'AD_VP';
SELECT * FROM hr.employees WHERE salary BETWEEN 10000 AND 20000;
SELECT * FROM hr.employees WHERE department_id NOT IN (60, 30, 100);
SELECT * FROM hr.employees WHERE first_name LIKE '%ll%';
SELECT * FROM hr.employees WHERE last_name LIKE '%a';
SELECT * FROM hr.employees WHERE salary > 10000;
SELECT * FROM hr.employees WHERE salary > 10000 AND last_name Like 'L%';
