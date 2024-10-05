-- Ensure the PostGIS extension is installed
CREATE EXTENSION IF NOT EXISTS postgis;

-- Create the Voter table
CREATE TABLE Voter (
    voter_id SERIAL PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    id_card VARCHAR(50) NOT NULL UNIQUE,
    registration_date DATE NOT NULL,
    birth_date DATE NOT NULL,
    has_voted BOOLEAN DEFAULT FALSE,
    polling_station_name VARCHAR(100),
    FOREIGN KEY (polling_station_name) REFERENCES Polling_Station(name)
);

-- Create the Polling_Station table
CREATE TABLE Polling_Station (
    name VARCHAR(100) PRIMARY KEY,
    district VARCHAR(100) NOT NULL,
    geom GEOMETRY(Point, 4326) -- Using WGS 84 coordinate system
);

-- Create the Party table
CREATE TABLE Party (
    party_id SERIAL PRIMARY KEY,
    party_name VARCHAR(100) NOT NULL,
    candidate VARCHAR(100) NOT NULL
);

-- Create the Count_Polling_Station_Party table
CREATE TABLE Count_Polling_Station_Party (
    polling_station_name VARCHAR(100),
    party_id INT,
    vote_count INT DEFAULT 0,
    PRIMARY KEY (polling_station_name, party_id),
    FOREIGN KEY (polling_station_name) REFERENCES Polling_Station(name),
    FOREIGN KEY (party_id) REFERENCES Party(party_id)
);

-- Index to improve performance on spatial queries
CREATE INDEX idx_geom ON Polling_Station USING GIST(geom);