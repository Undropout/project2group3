DROP DATABASE IF EXISTS choreWarsdb;
CREATE DATABASE choreWarsdb;

USE choreWarsdb;

CREATE TABLE choreData (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (255) NOT NULL,
    google_id INTEGER (100),
    last_name VARCHAR (255) NOT NULL,
    addressed_as VARCHAR (255) NOT NULL,
    account_type INTEGER (100),
    email VARCHAR (255) NOT NULL,
    username VARCHAR (255) NOT NULL,
    psword VARCHAR (255) NOT NULL,
    task VARCHAR (255) NOT NULL,
    reward INTEGER (100),
    chore_status VARCHAR (255) NOT NULL,
    account_created TIMESTAMP NOT NULL,
    last_login TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

