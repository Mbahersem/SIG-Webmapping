import { pool } from '../db';

class Elector {
    addElector(name, firstName, idNCI, inscDate, birthDate, nameBureau) {
        pool.query("INSERT INTO Electeur (nom, prenom, id_cni, date_insc, date_naiss, nom_bureau) " + 
        "VALUES ($1, $2, $3, $4, $5, $6)", [name, firstName, idNCI, inscDate, birthDate, nameBureau], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    getElector(idElec) {
        pool.query("SELECT * FROM Electeur WHERE id_elec = $1", [idElec], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    getElectors() {
        pool.query("SELECT * FROM Electeur", (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows;
        })
    }

    hasVoted(idElec) {
        pool.query("UPDATE Electeur SET vote = TRUE WHERE id_elec = $1", [idElec], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        })
    }

    deleteElector(idElec) {
        pool.query("DELETE FROM Electeur WHERE id_elec = $1", [idElec], (err, result) => {
            if(err) {
                throw err;
            }
        });        
    }
}