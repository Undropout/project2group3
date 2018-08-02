DROP DATABASE IF EXISTS choreWarsdb;
CREATE DATABASE choreWarsdb;

USE choreWarsdb;

CREATE TABLE choreTracker (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (255) NOT NULL,
    google_id INTEGER (100),
    last_name VARCHAR (255) NOT NULL,
    addressed_as VARCHAR (255) NOT NULL,
    account_type INTEGER (100),
    email VARCHAR (255) NOT NULL,
    username VARCHAR (255) NOT NULL,
    psword VARCHAR (255) NOT NULL,
    account_created TIMESTAMP NOT NULL,
    last_login TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE familyRelations (
    parent INTEGER (100) NOT NULL,
    child INTEGER (100) NOT NULL
);

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    posted_by INTEGER (100) NOT NULL,
    posted_for INTEGER (100) NOT NULL,
    reward INTEGER (100) NOT NULL,
    task VARCHAR (255) NOT NULL,
    task_status VARCHAR (255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE pets (
    id INTEGER (100) NOT NULL,
    pets_type VARCHAR (255) NOT NULL
);

CREATE TABLE owned_pets (
    pet_id INT NOT NULL AUTO_INCREMENT,
    pet_owner INTEGER (100) NOT NULL,
    pet_type INTEGER (100) NOT NULL,
    PRIMARY KEY (pet_id)
);

CREATE TABLE petTracker (
    id INT NOT NULL AUTO_INCREMENT,
    pet_id INTEGER (100) NOT NULL,
    days_alive INTEGER (100) NOT NULL,
    food_balance INTEGER (100) NOT NULL,
    loyalty INTEGER (100) NOT NULL,
    PRIMARY KEY(id)
);

