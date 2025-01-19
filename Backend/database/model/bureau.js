import { pool } from '../db';

class Bureau {
    getBureaux() {
        pool.query("SELECT * FROM Bureau_de_vote", (err, result) => {
            if(err) {
                throw err;
            }
            return result.rows;
        })
    }
}

export { Bureau };