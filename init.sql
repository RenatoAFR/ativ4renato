CREATE DATABASE IF NOT EXISTS ativ4renato;

USE ativ4renato;

CREATE TABLE consultadados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coluna1 VARCHAR(255),
    coluna2 VARCHAR(255)
);

INSERT INTO consultadados (coluna1, coluna2) VALUES ('valores1', 'valores2'), ('valores3', 'valores4');
