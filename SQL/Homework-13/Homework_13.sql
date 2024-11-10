-- Написать запросы по созданию таблиц со связями и ключами на основе получившейся ER-диаграммы службы такси

-- Создание базы данных taxi
CREATE DATABASE taxi;

-- Создание таблицы СТО
CREATE TABLE STO (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Создание таблицы Водитель
CREATE TABLE Voditel (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    license_number VARCHAR(50)
);

-- Создание таблицы Машина
CREATE TABLE Mashina (
    id INT PRIMARY KEY,
    model VARCHAR(255),
    license_plate VARCHAR(50),
    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES Voditel(id)
);

-- Создание таблицы Ремонт
CREATE TABLE Remont (
    id INT PRIMARY KEY,
    sto_id INT UNIQUE,
    machine_id INT,
    repair_date DATE,
    cost DECIMAL(10, 2),
    FOREIGN KEY (sto_id) REFERENCES STO(id),
    FOREIGN KEY (machine_id) REFERENCES Mashina(id)
);

-- Создание таблицы Диспетчер
CREATE TABLE Dispetcher (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    contact_info VARCHAR(255)
);

-- Создание таблицы Клиент
CREATE TABLE Klient (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    contact_info VARCHAR(255)
);

-- Создание таблицы Тариф
CREATE TABLE Tarif (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    base_price DECIMAL(10, 2)
);

-- Создание таблицы Ценовые коэффициенты
CREATE TABLE TsenovyeKoefitsienty (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    coefficient DECIMAL(3, 2)
);

-- Создание таблицы Заказ
CREATE TABLE Zakaz (
    id INT PRIMARY KEY,
    driver_id INT,
    dispatcher_id INT,
    client_id INT,
    tariff_id INT,
    price_coefficient_id INT,
    order_date DATE,
    FOREIGN KEY (driver_id) REFERENCES Voditel(id),
    FOREIGN KEY (dispatcher_id) REFERENCES Dispetcher(id),
    FOREIGN KEY (client_id) REFERENCES Klient(id),
    FOREIGN KEY (tariff_id) REFERENCES Tarif(id),
    FOREIGN KEY (price_coefficient_id) REFERENCES TsenovyeKoefitsienty(id)
);

-- Создание таблицы Отзывы
CREATE TABLE Otzyvy (
    id INT PRIMARY KEY,
    zakaz_id INT UNIQUE,
    review_text TEXT,
    rating INT,
    FOREIGN KEY (zakaz_id) REFERENCES Zakaz(id)
);