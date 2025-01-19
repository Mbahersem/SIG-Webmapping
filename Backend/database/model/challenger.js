import { pool } from '../db';

class Challenger {
    // constructor(name, birthDate, nameBureau, idAdmin) {
    //     this.name = name;
    //     this.birthDate = birthDate;
    //     this.nameBureau = nameBureau;
    //     this.idAdmin = idAdmin;
    // }

    addChallenger(name, birthDate, nameBureau, idAdmin) {
        pool.query("INSERT INTO Scrutateur (nom_scrut, date_naiss_scrut, nom_bureau, id_admin) " + 
        "VALUES ($1, $2, $3, $4)", [name, birthDate, nameBureau, idAdmin], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    getChallenger(idScrut) {
        pool.query("SELECT * FROM Scrutateur WHERE id_scrut = $1", [idScrut], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    deleteChallenger(idScrut) {
        pool.query("DELETE FROM Scrutateur WHERE id_scrut = $1", [idScrut], (err, result) => {
            if(err) {
                throw err;
            }
        });        
    }
}

export { Challenger };