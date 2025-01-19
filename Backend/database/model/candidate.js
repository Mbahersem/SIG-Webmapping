import { pool } from '../db';

class Candidate {
    addCandidate(nameParty, nameCandidate) {
        pool.query("INSERT INTO Candidat (nom_parti, nom_candidat) " + 
        "VALUES ($1, $2)", [nameParty, nameCandidate], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    getCandidates() {
        pool.query("SELECT * FROM Candidat", (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows;
        })
    }

    getCandidate(idParty) {
        pool.query("SELECT * FROM Candidat WHERE id_parti = $1", [idParty], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    changeCandidate(idParty, name) {
        pool.query("UPDATE Candidat SET nom_candidat = $1 WHERE id_parti = $2", [name, idParty], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        })
    }
}

export { Candidate };