-- Active: 1662660093689@@35.226.146.116@3306@ailton-igor-tristao
CREATE TABLE Turma(
id  INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL UNIQUE,
modulo INT DEFAULT 0
);

CREATE TABLE Aluno(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma(id)
);

CREATE TABLE Docente(
     id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma(id)
);