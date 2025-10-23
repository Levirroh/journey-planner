DROP DATABASE IF EXISTS journey_planner;
CREATE DATABASE journey_planner;
USE journey_planner;

CREATE TABLE users(
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

    /* optional / foreign */
    user_wishCountryOne VARCHAR(50),
    user_wishCountryTwo VARCHAR(50),
    user_wishCountryThree VARCHAR(50),

    user_travelType ENUM('lazer', 'negocios', 'aventura', 'cultural', 'gastronomica', 'outros')
);

INSERT INTO users (
    user_name, 
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
