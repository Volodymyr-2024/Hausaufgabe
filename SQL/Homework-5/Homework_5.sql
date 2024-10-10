/*Подключиться к базе данных world (которая находится на удаленном сервере). Посмотреть на таблицы
city, country из базы world. В каждой таблице есть поле название (Name) и население (Population).
Поле Name в одной таблице означает название города, а в другой - название страны. Написать запрос 
с помощью UNION, который выводит список названий всех городов и стран с их населением. Итоговая выборка
должна содержать два столбца: Name, Population.
*/ 

SELECT name, population FROM world.city
UNION 
SELECT name, population FROM world.country;

-- Посмотреть на таблицы в базе world и объяснить ограничения нескольких столбцов - ответить 1 предложением.
/* Столбец id можеет иметь ограничение PRIMARY KEY, чтобы обеспечить уникальность, cтолбцы name, district, и population 
могут иметь ограничения NOT NULL
*/

/*Далее работаем на локальном сервере. Создать новую таблицу citizen, которая содержит следующие поля: уникальное
 автоинкрементное, номер соц страхования, имя, фамилию и емейл.
 */
 CREATE TABLE citizen(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 social_security_number NUMERIC, 
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 email VARCHAR(30)
 );
 
 -- Добавить в таблицу 5 значений. Добавить 3 человека с одинаковыми именами и 2 человека без lastname
 INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
(123456789, 'Nikolay', 'Kovrov', 'nikolay.kovrov@example.com'),
(987654321, 'Nikolay', 'Dobrov', 'nikolay.dobrovd@example.com'),
(456789123, 'Nikolay', "", 'nikolay3@example.com'),
(654321987, 'Petr', 'Smith', 'petr.smith@example.com'),
(321987654, 'Ivan', "", 'ivan@example.com');

-- Использовать оператор alter table … modify , чтобы добавить ограничение not null на поле firstname и lastname. 
ALTER TABLE citizen
MODIFY first_name VARCHAR(30) NOT NULL,
MODIFY last_name VARCHAR(30) NOT NULL;

-- Добавить ограничение unique для пары firstname\lastname
ALTER TABLE citizen
ADD CONSTRAINT unique_name UNIQUE (first_name, last_name);

/* Удалить таблицу из базы и пересоздать ее, модифицировав запрос add table так, чтобы он учитывал ограничения
(см примеры из класса).
*/
DROP TABLE IF EXISTS citizen;

CREATE TABLE citizen (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    social_security_number NUMERIC NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    CONSTRAINT unique_name UNIQUE (first_name, last_name)
);
-- Добавить правильные и неправильные данные (нарушающие и не нарушающие ограничения).
-- Добавим правильные данные
INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
(123456789, 'Nikolay', 'Kovrov', 'nikolay.kovrov@example.com'),
(987654321, 'Petr', 'Smith', 'petr.smith@example.com');

-- Добавим неправильные данные
INSERT INTO citizen (social_security_number, first_name, last_name, email)
VALUES 
(456789123, 'Nikolay', 'Kovrov', 'nikolay2.kovrov@example.com'); 
