import { pool } from '../db.js';

class Bureau {
    async getBureaux() {
        const { rows } = await pool.query("SELECT * FROM Bureau_de_vote");
        return rows;
    }
}

export { Bureau };