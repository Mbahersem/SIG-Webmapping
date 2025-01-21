import { pool } from '../db.js';

class Elector {
    async addElector(name, firstName, idNCI, inscDate, birthDate, nameBureau) {
        const { rows } = await pool.query("INSERT INTO Electeur (nom, prenom, id_cni, date_insc, date_naiss, nom_bureau) " + 
        "VALUES ($1, $2, $3, $4, $5, $6)", [name, firstName, idNCI, inscDate, birthDate, nameBureau]);
        return rows;
    }

    async getElector(idElec) {
        const { rows } = await pool.query("SELECT * FROM Electeur WHERE id_elec = $1", [idElec]);
        return rows;
    }

    async getElectors() {
        const { rows } = await pool.query("SELECT * FROM Electeur");
        return rows;
    }

    async hasVoted(idElec) {
        const { rows } = await pool.query("UPDATE Electeur SET vote = TRUE WHERE id_elec = $1", [idElec]);
        return rows;
    }

    async deleteElector(idElec) {
        const { rows } = await pool.query("DELETE FROM Electeur WHERE id_elec = $1", [idElec]); 
        return rows;       
    }
}