import { pool } from '../db.js';

class Candidate {
    async addCandidate(nameParty, nameCandidate) {
        const { rows } = await pool.query("INSERT INTO Candidat (nom_parti, nom_candidat) " + 
        "VALUES ($1, $2)", [nameParty, nameCandidate]);
        return rows;
    }

    async getCandidates() {
        const { rows } = await pool.query("SELECT * FROM Candidat");
        return rows;
    }

    async getCandidate(idParty) {
        const { rows } = await pool.query("SELECT * FROM Candidat WHERE id_parti = $1", [idParty]);
        return rows;
    }

    async changeCandidate(idParty, name) {
        const { rows } = await pool.query("UPDATE Candidat SET nom_candidat = $1 WHERE id_parti = $2", [name, idParty]);
        return rows;
    }
}

export { Candidate };