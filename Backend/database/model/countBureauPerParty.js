import { pool } from '../db';

class CountBureauPerParty {
    countVotes(nameBureau, idParty, count) {
        pool.query("INSERT INTO Compter_bureau_parti (nom_bureau, id_parti, nombre_voies) " +
        "VALUES ($1, $2, $3)", [nameBureau, idParty, count], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    countByArea(geom) {
        pool.query("SELECT cbp.nom_bureau, c.nom_parti, SUM(cbp.nombre_voies) AS total_voies" + 
        "FROM Compter_bureau_parti cbp" +
        "INNER JOIN Bureau_de_vote bv ON cbp.nom_bureau = bv.nom" +
        "INNER JOIN Candidat c ON cbp.id_parti = c.id_parti" + 
        "WHERE ST_Contains(ST_GeomFromGeoJSON($1), bv.geom)" +
        "GROUP BY cbp.nom_bureau, c.nom_parti", [geom], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows;
        });
    }
}

export { CountBureauPerParty }