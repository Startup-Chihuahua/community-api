CREATE DATABASE IF NOT EXISTS community;
use community;

create table users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	mail VARCHAR(100),
	password VARCHAR(500),
	name VARCHAR(50),
	lastname VARCHAR(100),
	curp VARCHAR(20),
	birth_date date,
	gender VARCHAR(20),
	state VARCHAR(50),
	town VARCHAR(50),
	neighborhood VARCHAR(50),
	program VARCHAR(100),
	tags VARCHAR(15),
	emprendedor VARCHAR(20),
	aliado VARCHAR(20)
);

create table token(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	fk_user_id INT NOT NULL,
	uuid VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS company(
    company INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    location VARCHAR(50),
    description VARCHAR(50),
    web VARCHAR(50),
    contact VARCHAR(50)
);

create table events(
	id INT PRIMARY KEY AUTO_INCREMENT,
	event_name VARCHAR(100),
	description VARCHAR(200),
	profile_type VARCHAR(50),
	start_date DATETIME,
	end_date DATETIME,
	url_flyer VARCHAR(1000),
	modality VARCHAR(20),
	location VARCHAR(200),
	name VARCHAR(50),
	lastname VARCHAR(100),
	phone VARCHAR(50),
	mail VARCHAR(100),
	community_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS community(
    community INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(200)
);
