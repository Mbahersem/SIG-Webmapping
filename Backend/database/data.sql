-- Insert data into the Voter table
INSERT INTO Voter (last_name, first_name, id_card, registration_date, birth_date, polling_station_name)
VALUES
  ('Nkoumou', 'Alain', 'CM123456789', '2023-01-15', '1990-05-10', 'Yaounde Central'),
  ('Mbianda', 'Marie', 'CM234567890', '2023-02-20', '1985-12-25', 'Douala Bonanjo'),
  ('Ndze', 'Samuel', 'CM345678901', '2023-03-05', '1978-08-18', 'Bamenda Main Market'),
  ('Ndedi', 'Esther', 'CM456789012', '2023-04-10', '1995-11-03', 'Buea Government Layout');

-- Insert data into the Polling_Station table
INSERT INTO Polling_Station (name, district, geom)
VALUES
  ('Yaounde Central', 'Centre', ST_GeomFromText('POINT(38.729455 3.866546)', 4326)),
  ('Douala Bonanjo', 'Littoral', ST_GeomFromText('POINT(38.733502 4.027412)', 4326)),
  ('Bamenda Main Market', 'Northwest', ST_GeomFromText('POINT(9.250698 6.102853)', 4326)),
  ('Buea Government Layout', 'Southwest', ST_GeomFromText('POINT(8.820409 4.115486)', 4326));

-- Insert data into the Party table
INSERT INTO Party (party_name, candidate)
VALUES
  ('CPDM', 'Paul Biya'),
  ('MRC', 'Maurice Kamto'),
  ('SDF', 'Ni John Fru Ndi');

-- Insert data into the Count_Polling_Station_Party table
INSERT INTO Count_Polling_Station_Party (polling_station_name, party_id, vote_count)
VALUES
  ('Yaounde Central', 1, 100),
  ('Yaounde Central', 2, 80),
  ('Yaounde Central', 3, 50),
  ('Douala Bonanjo', 1, 120),
  ('Douala Bonanjo', 2, 90),
  ('Douala Bonanjo', 3, 60),
  ('Bamenda Main Market', 1, 80),
  ('Bamenda Main Market', 2, 100),
  ('Bamenda Main Market', 3, 70),
  ('Buea Government Layout', 1, 90),
  ('Buea Government Layout', 2, 80),
  ('Buea Government Layout', 3, 100);