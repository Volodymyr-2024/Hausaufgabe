/*Cоздать таблицу weather с тремя полями:
название города (city)
дата (forecast_date)
температура в эту даты (temperature)
*/
CREATE TABLE Weather (
city VARCHAR(50),
forecast_date DATE,
temperature int);

-- Вывести содержимое таблицы
SELECT * FROM weather;

 -- Добавить данные в таблицу, используя запрос INSERT “29 августа 2023 года в Берлине было 30 градусов”
 INSERT INTO weather (city,  forecast_date, temperature)
 VALUES ("Berlin", "2023-08-29", 30);
 
 -- Добавить еще 3 записи в таблицу (произвольную погоду в разных городах в разные дни). 
 INSERT INTO weather (city,  forecast_date, temperature)
 VALUES ("Leipzig", "2024-08-22", 35);
 INSERT INTO weather (city,  forecast_date, temperature)
 VALUES ("Hannover", "2022-02-18", -5);
 INSERT INTO weather (city,  forecast_date, temperature)
 VALUES ("Munchen", "2023-12-05", 8);
 
 -- Написать запрос, который возвращает содержимое таблицы. 
 SELECT * FROM weather;
 
 -- Изменить данные в таблице о температуре в Берлине с 30 на 26 градусов.
 UPDATE weather
 SET temperature = 26
 WHERE city = "Berlin";
 
 -- Поменяйте во всей таблице название города на Paris для записей, где температура выше 25 градусов.
 UPDATE weather
 SET city = "Paris"
 WHERE temperature > 25;
 
 -- Добавить к таблице weather дополнительный столбец min_temp типа integer.
 ALTER TABLE weather
 ADD min_temp int;
 
 -- Используя команду update, установить значение поля min_temp в 0 для всех записей в таблице
 UPDATE weather
 SET min_temp = 0;