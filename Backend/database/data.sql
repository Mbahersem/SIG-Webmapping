-- Insert data into the Voter table
INSERT INTO Electeur (nom, prenom, id_cni, date_insc, date_naiss, nom_bureau)
VALUES
  ('Nkoumou', 'Alain', 'CM123456789', '2023-01-15', '1990-05-10', 'Yaounde Central'),
  ('Mbianda', 'Marie', 'CM234567890', '2023-02-20', '1985-12-25', 'Douala Bonanjo'),
  ('Ndze', 'Samuel', 'CM345678901', '2023-03-05', '1978-08-18', 'Bamenda Main Market'),
  ('Ndedi', 'Esther', 'CM456789012', '2023-04-10', '1995-11-03', 'Buea Government Layout');

-- Insert data into the Polling_Station table
INSERT INTO Bureau_de_vote (nom, arrondissement, geom)
VALUES
  ('Yaounde Central', 'Centre', ST_GeomFromText('POINT(11.520753 3.860502)', 4326)),
  ('Douala Bonanjo', 'Littoral', ST_GeomFromText('POINT(9.743776 4.051397)', 4326)),
  ('Bamenda Main Market', 'Northwest', ST_GeomFromText('POINT(10.152221 5.954798)', 4326)),
  ('Buea Government Layout', 'Southwest', ST_GeomFromText('POINT(9.256665 4.152693)', 4326)),
  ('Yaounde Nkolofamba', 'Centre', ST_GeomFromText('POINT(11.540952 3.788622)', 4326));

-- Insert data into the Party table
INSERT INTO Candidat (nom_parti, nom_candidat)
VALUES
  ('CPDM', 'Paul Biya'),
  ('MRC', 'Maurice Kamto'),
  ('SDF', 'Ni John Fru Ndi');

-- Insert data into the Count_Polling_Station_Party table
INSERT INTO Compter_bureau_parti (nom_bureau, id_parti, nombre_voies)
VALUES
  ('Yaounde Central', 1, 100),
  ('Yaounde Central', 2, 80),
  ('Yaounde Nkolofamba', 1, 200),
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