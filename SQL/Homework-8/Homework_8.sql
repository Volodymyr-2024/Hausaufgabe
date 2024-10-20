-- Подключитесь к базе данных Students (которая находится на удаленном сервере). 
USE students;

-- Найдите самого старшего студента
SELECT name, age 
FROM Students
WHERE age = (SELECT MAX(age) FROM Students); 

-- Найдите самого старшего преподавателя
SELECT name, age 
FROM Teachers
WHERE age = (SELECT MAX(age) FROM Teachers); 

-- Выведите список преподавателей с количеством компетенций у каждого
SELECT t1.name, COUNT(t2.competencies_id) AS  count_competencies  
FROM Teachers t1
LEFT JOIN Teachers2Competencies t2
ON t1.id = t2.teacher_id
GROUP BY name;

-- Выведите список курсов с количеством студентов в каждом
SELECT t1.title AS title_courses, count(t2.student_id) AS count_students  
FROM Courses t1
LEFT JOIN Students2Courses t2
ON t1.id = t2.course_id
GROUP BY title;