USE online-shop;
 
-- Создать базу данных онлайн-магазина из двух таблиц: заказчики (Customer) и заказы (Orders).
 CREATE TABLE Customer ( 
 id INT AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 street VARCHAR(50), 
 postal_code VARCHAR(10),
 city VARCHAR(30),
 country VARCHAR(30),
 email VARCHAR(30),
 date_registration TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE Orders(
order_id INT AUTO_INCREMENT PRIMARY KEY,
customer_id INT,
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
item_name VARCHAR(100),
item_description TEXT,
item_image_url VARCHAR(255), 
order_amount DECIMAL(10, 2) NOT NULL
);

-- Заполнить таблицу тестовыми данными: 3-5 заказчиков и с десяток ордеров так, чтобы у всех заказчиков было разное количество заказов. 
INSERT INTO Customer(first_name, last_name, street, postal_code, city, country, email) VALUES
('Иван', 'Иванов', 'Улица 1', '123456', 'Берлин', 'Германия', 'ivan@example.com'),
('Петр', 'Петров', 'Улица 2', '234567', 'Рим', 'Италия', 'petr@example.com'),
('Илья', 'Сидоров', 'Улица 3', '345678', 'Вена', 'Австрия', 'illya@example.com');

INSERT INTO Orders (customer_id, item_name, item_description, item_image_url, order_amount) VALUES
(1, 'Ноутбук', 'Ноутбук для работы и игр', 'https://example.com/laptop.jpg', 800.00),
(1, 'Мышь', 'Мышь для ПК или ноутбука', 'https://example.com/mouse.jpg', 10.00),
(2, 'Компьютер', 'Компьютер для работы ', 'https://example.com/computer.jpg', 550.00),
(2, 'Монитор', 'Диагональ 27 дюймов', 'https://example.com/monitor.jpg', 180.00),
(3, 'Смартфон', 'Apple iphone 15', 'https://example.com/smart.jpg', 950.00);

INSERT INTO Orders (customer_id, item_name, item_description, item_image_url, order_amount) VALUES
(1, 'Ноутбук', 'Ноутбук для работы и игр', 'https://example.com/laptop.jpg', 800.00),
(1, 'Мышь', 'Мышь для ПК или ноутбука', 'https://example.com/mouse.jpg', 10.00);

-- К таблице Customer добавить поле last_modified, которое содержит дату последнего изменения данных заказчика. Установить его значение в now. 
ALTER TABLE Сustomer
ADD last_modified DATETIME DEFAULT NOW();

-- Добавить к таблице Order поле discounter_price, которое содержит скидочную стоимость заказа. Выставить значение этого поля для всех заказов на 10% меньше, чем оригинальная стоимость заказа.
ALTER TABLE Orders
ADD discounter_price DECIMAL(10, 2); 

UPDATE Orders
SET discounter_price = order_amount * 0.9;

-- Вывести все заказы, отсортированные по убыванию по стоимости
SELECT * FROM orders
ORDER BY order_amount DESC;

-- Вывести всех заказчиков, у которых почта зарегистриварована на gmail.com
SELECT * FROM customer
WHERE email LIKE "%@gmail.com";

/* Вывести заказы, добавив дополнительный вычисляемый столбец status, который вычисляется
по стоимости заказа и имеет три значения: low, middle, high.
*/
SELECT *,
	CASE
		WHEN order_amount > 500 THEN "high"
        WHEN order_amount > 100 THEN "middle"
        ELSE "low"
    END AS status
 FROM orders;

-- Вывести заказчиков по убыванию рейтинга.
-- В базе данных не была интегрирована система рейтинга

-- Вывести всех заказчиков из города на ваш выбор.
SELECT first_name, last_name, city
FROM customer
WHERE city = "Берлин";

-- Написать запрос, который вернет самый часто продаваемый товар. 
SELECT item_name, COUNT(*) AS occurences
FROM orders
GROUP BY item_name;

-- Вывести список заказов с максимальной скидкой. 
SELECT order_id, customer_id, order_date, item_name, item_description, item_image_url, order_amount, discounter_price, (order_amount - discounter_price) AS discount_amount
FROM orders
ORDER BY discount_amount DESC;

-- Ответьте в 1 предложении: как вы определите скидку?
/*Скидка составляет разницу между исходной ценой и конечной ценой или как процент от исходной цены,
который вычитается из стоимости.
*/

-- Ответьте в 1 предложении: может ли это быть разница между нормальной ценой и скидочной ценой? 
-- Да, это может быть разница между нормальной ценой и скидочной ценой.

/*Написать запрос, который выведет все заказы с дополнительным столбцом процент_скидки, который содержит
разницу в процентах между нормальной и скидочной ценой.
*/
SELECT order_id, customer_id, order_date, item_name, item_description, item_image_url, order_amount, discounter_price, ((order_amount - discounter_price) / order_amount * 100) AS discount_percentage
FROM orders;

