import { pool } from '../db.js';

class Challenger {
    // constructor(name, birthDate, nameBureau, idAdmin) {
    //     this.name = name;
    //     this.birthDate = birthDate;
    //     this.nameBureau = nameBureau;
    //     this.idAdmin = idAdmin;
    // }

    async addChallenger(name, birthDate, nameBureau, idAdmin) {
        const { rows } = await pool.query("INSERT INTO Scrutateur (nom_scrut, date_naiss_scrut, nom_bureau, id_admin) " + 
        "VALUES ($1, $2, $3, $4)", [name, birthDate, nameBureau, idAdmin]);
        return rows;
    }

    async getChallenger(idScrut) {
        const { rows } = await pool.query("SELECT * FROM Scrutateur WHERE id_scrut = $1", [idScrut]);
        return rows;
    }

    async deleteChallenger(idScrut) {
        const { rows } = await pool.query("DELETE FROM Scrutateur WHERE id_scrut = $1", [idScrut]); 
        return rows;       
    }
}

export { Challenger };