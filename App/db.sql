CREATE DATABASE journey_planner;
USE journey_planner;

CREATE TABLE user(
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(90) NOT NULL,
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
    
    /*Foreign*/
    user_wishCountryOne VARCHAR(50),
    user_wishCountryTwo VARCHAR(50),
    user_wishCountryThree VARCHAR(50),
    user_travelType ENUM('lazer', 'negocios', 'aventura', 'cultural', 'gastronomica', 'outros'),

    /*optional*/
    user_wishCountryOne VARCHAR(50),
    user_wishCountryTwo VARCHAR(50),
    user_wishCountryThree VARCHAR(50),

    user_travelType int NOT NULL,

)