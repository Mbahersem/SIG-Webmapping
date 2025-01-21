import { pool } from '../db.js';

class Administrator {
    async addAdministrator(name, birthDate) {
        const { rows } = await pool.query("INSERT INTO Administrateur (nom_admin, date_naiss_admin) " + 
        "VALUES ($1, $2)", [name, birthDate]);
        return rows;
    }

    async getAdministrator(idAdmin) {
        const { rows } = await pool.query("SELECT * FROM Administrateur WHERE id_admin = $1", [idAdmin]);
        return rows;
    }

    async deleteAdministrator(idAdmin) {
        const { rows } = await pool.query("DELETE FROM Administrateur WHERE id_admin = $1", [idAdmin]); 
        return rows;       
    }
}

export { Administrator };