-- Création de la base de données (à exécuter dans un terminal PostgreSQL)
CREATE DATABASE election_db;

-- Connexion à la base de données
c election_db;

-- Activation de l'extension PostGIS
CREATE EXTENSION postgis;

-- Table Electeur
CREATE TABLE Electeur (
    id_elec SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    id_cni VARCHAR(50) NOT NULL UNIQUE,
    date_insc DATE NOT NULL,
    date_naiss DATE NOT NULL,
    vote BOOLEAN DEFAULT FALSE,
    nom_bureau VARCHAR(100),
    FOREIGN KEY (nom_bureau) REFERENCES Bureau_de_vote(nom)
);

-- Table Scrutateur
CREATE TABLE Scrutateur (
    id_scrut SERIAL PRIMARY KEY,
    nom_scrut VARCHAR(100) NOT NULL,
    date_naiss_scrut DATE NOT NULL,
    nom_bureau VARCHAR(100),
    id_admin INT,
    FOREIGN KEY (nom_bureau) REFERENCES Bureau_de_vote(nom),
    FOREIGN KEY (id_admin) REFERENCES Administrateur(id_admin)
);

-- Table Administrateur
CREATE TABLE Administrateur (
    id_admin SERIAL PRIMARY KEY,
    nom_admin VARCHAR(100) NOT NULL,
    date_naiss_admin DATE NOT NULL
);

-- Table Bureau_de_vote
CREATE TABLE Bureau_de_vote (
    nom VARCHAR(100) PRIMARY KEY,
    arrondissement VARCHAR(100),
    geom GEOMETRY(Point, 4326) -- Utilisation du système de coordonnées WGS 84
);

-- Table Candidat
CREATE TABLE Candidat (
    id_parti SERIAL PRIMARY KEY,
    nom_parti VARCHAR(100) NOT NULL,
    nom_candidat VARCHAR(100) NOT NULL
);

-- Table Compter_bureau_parti
CREATE TABLE Compter_bureau_parti (
    nom_bureau VARCHAR(100),
    id_parti INT,
    nombre_voies INT DEFAULT 0,
    PRIMARY KEY (nom_bureau, id_parti),
    FOREIGN KEY (nom_bureau) REFERENCES Bureau_de_vote(nom),
    FOREIGN KEY (id_parti) REFERENCES Candidat(id_parti)
);
