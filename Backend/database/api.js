import { Router } from 'express';

import { pool } from './db.js';

const dataRouter = Router();

dataRouter.get('/count_by_area', async(req, res) => {
    try {
        const countsByArea = await pool.query("SELECT cbp.nom_bureau, c.nom_parti, SUM(cbp.nombre_voies) AS total_voies" + 
        "FROM Compter_bureau_parti cbp" +
        "INNER JOIN Bureau_de_vote bv ON cbp.nom_bureau = bv.nom" +
        "INNER JOIN Candidat c ON cbp.id_parti = c.id_parti" + 
        "WHERE ST_Contains(ST_GeomFromGeoJSON($1), bv.geom)" +
        "GROUP BY cbp.nom_bureau, c.nom_parti", [req.geom]);
        res.json(countsByArea.rows);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server error " + err.message);
    }
})