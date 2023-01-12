CREATE DATABASE IF NOT EXISTS community;
use community;

CREATE TABLE IF NOT EXISTS user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    lastName VARCHAR(50),
    mail VARCHAR(50),
    password VARCHAR(100),
    curp VARCHAR(20),
    phone VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS company(
    company INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    location VARCHAR(50),
    description VARCHAR(50),
    web VARCHAR(50),
    contact VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Event(
    event INT PRIMARY KEY AUTO_INCREMENT,
    company INT,
    capacity VARCHAR(50),
    cost DECIMAL,
    modality VARCHAR(50),
    dateEvent DATETIME,
    location VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS community(
    community INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(200)
);
