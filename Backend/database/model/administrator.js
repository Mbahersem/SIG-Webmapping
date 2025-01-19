import { pool } from '../db';

class Administrator {
    addAdministrator(name, birthDate) {
        pool.query("INSERT INTO Administrateur (nom_admin, date_naiss_admin) " + 
        "VALUES ($1, $2)", [name, birthDate], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    getAdministrator(idAdmin) {
        pool.query("SELECT * FROM Administrateur WHERE id_admin = $1", [idAdmin], (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows[0];
        });
    }

    deleteAdministrator(idAdmin) {
        pool.query("DELETE FROM Administrateur WHERE id_admin = $1", [idAdmin], (err, result) => {
            if(err) {
                throw err;
            }
        });        
    }
}

export { Administrator };