DROP DATABASE IF EXISTS journey_planner;
CREATE DATABASE journey_planner;
USE journey_planner;

CREATE TABLE users(
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(90) NOT NULL,
    user_email VARCHAR(180) NOT NULL,
    user_nickname VARCHAR(45) NOT NULL,
    user_phone VARCHAR(11) NOT NULL,
    user_birth DATE NOT NULL,
    user_country VARCHAR(50) NOT NULL,
    user_state VARCHAR(50) NOT NULL,
    user_city VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,

    user_creation DATE NOT NULL,
    user_lastSeen DATETIME NOT NULL,
    user_accountStatus ENUM('active', 'inactive', 'banned') DEFAULT 'active',

    /* optional / foreign */
    user_wishCountryOne VARCHAR(50),
    user_wishCountryTwo VARCHAR(50),
    user_wishCountryThree VARCHAR(50),

    user_travelType ENUM('lazer', 'negocios', 'aventura', 'cultural', 'gastronomica', 'outros')
);

CREATE TABLE country (
    country_code CHAR(3) PRIMARY KEY,  -- ISO Code
    country_name VARCHAR(100) NOT NULL
);

CREATE TABLE state (
    state_code CHAR(10) PRIMARY KEY,    -- ISO Code
    country_code CHAR(3) NOT NULL,
    state_name VARCHAR(120) NOT NULL,

    FOREIGN KEY(country_code) REFERENCES country(country_code)
);

CREATE TABLE city (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    state_code CHAR(10) NOT NULL,
    city_name VARCHAR(120) NOT NULL,

    FOREIGN KEY(state_code) REFERENCES state(state_code)
);

CREATE TABLE aeroport (
    aeroport_id INT AUTO_INCREMENT PRIMARY KEY,

    city_id INT NOT NULL,
    state_code CHAR(10) NOT NULL,
    country_code CHAR(3) NOT NULL,

    aeroport_address VARCHAR(180),
    api_aeroport_id INT NULL,

    FOREIGN KEY(city_id) REFERENCES city(city_id),
    FOREIGN KEY(state_code) REFERENCES state(state_code),
    FOREIGN KEY(country_code) REFERENCES country(country_code)
);

CREATE TABLE plane(
	plane_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    plane_model VARCHAR(180) NOT NULL,
    total_seats INT NOT NULL
);

CREATE TABLE seat(
	seat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    seat_code VARCHAR(45),
    seat_plane INT NOT NULL,
    
    FOREIGN KEY (seat_plane) REFERENCES plane(plane_id)
);

CREATE TABLE flight(
	light_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    flight_title VARCHAR(45) NOT NULL,

    flight_destiny INT NOT NULL,
    flight_origin INT NOT NULL,
    flight_plane INT NOT NULL,

    flight_departure TIME NOT NULL,
    flight_duration TIME,
    flight_arriving TIME NOT NULL,

    flight_weather ENUM("Chovendo", "Ensolarado", "Nublado", "Limpo", "Tempestade"),

    FOREIGN KEY(flight_plane) REFERENCES plane(plane_id)
);


CREATE TABLE flight_seat(
	flight_seat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	flight_id INT NOT NULL,
    seat_id INT NOT NULL,
    is_reserved BOOLEAN NOT NULL,

    FOREIGN KEY(flight_id) REFERENCES flight(flight_id),
    FOREIGN KEY(seat_id) REFERENCES plane_seat(seat_id)
);


INSERT INTO users (
    user_name, 
    user_email,
    user_nickname, 
    user_phone, 
    user_birth, 
    user_country, 
    user_state, 
    user_city, 
    user_password, 
    user_creation, 
    user_lastSeen, 
    user_accountStatus, 
    user_wishCountryOne, 
    user_wishCountryTwo, 
    user_wishCountryThree, 
    user_travelType
) VALUES (
    'João Silva',
    'j.silva@gmail.com',
    'joaos',                     
    '47988887777',            
    '2000-05-12',                 
    'Brasil',                      
    'Santa Catarina',             
    'Joinville',                   
    SHA2('senha123', 256),         
    CURDATE(),                     
    NOW(),                         
    'active',                      
    'Japão',                       
    'Canadá',                      
    'Itália',                    
    'aventura'                     
);



SELECT * FROM users;