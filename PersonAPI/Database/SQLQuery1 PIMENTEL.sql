CREATE DATABASE PersonDB;
GO

USE PersonDB;
GO

CREATE TABLE Person
(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    LastName VARCHAR(100) NOT NULL,
    FirstName VARCHAR(100) NOT NULL,
    Address VARCHAR(255) NOT NULL
);
GO

INSERT INTO Person
VALUES
('Esperancilla', 'Sean', 'Quezon City');