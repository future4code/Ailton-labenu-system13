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


CREATE TABLE Hobbies(
    id INT PRIMARY KEY AUTO_INCREMENT,
    hobby VARCHAR(255) NOT NULL UNIQUE
   ) ;

SELECT * FROM Hobbies;
INSERT INTO Hobbies(hobby) values ("Chorar");
SELECT * FROM Hobbies;
CREATE TABLE hobby_aluno(
    id INT PRIMARY KEY AUTO_INCREMENT,
    hobby VARCHAR(255) NOT NULL,
     id_aluno INT,
     FOREIGN KEY (hobby) REFERENCES Hobbies(hobby),
     FOREIGN KEY (id_aluno) REFERENCES Aluno(id)
);

SELECT * FROM hobby_aluno;
CREATE TABLE Especialidade(
    id INT PRIMARY KEY AUTO_INCREMENT,
    especialidade VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Especialidade(especialidade) values ("JS");

INSERT INTO Especialidade(especialidade) values ("CSS");

INSERT INTO Especialidade(especialidade) values ("React");

INSERT INTO Especialidade(especialidade) values ("Typescript");

INSERT INTO
    Especialidade(especialidade)
values (
        "POO (Programação Orientada a Objetos)"
    );

    SELECT * FROM Especialidade;



CREATE TABLE especialidade_docente(
     id INT PRIMARY KEY AUTO_INCREMENT,
     especialidade VARCHAR(255) NOT NULL,
     id_docente INT,
     FOREIGN KEY (especialidade) REFERENCES Especialidade(especialidade),
     FOREIGN KEY (id_docente) REFERENCES Docente(id)
);



    SELECT * FROM especialidade_docente;

