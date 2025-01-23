import express from 'express';
import cors from 'cors';

import { pool } from './database/db.js';
import { challengerRouter } from './api/challengerRoutes.js';
import { bureauRouter } from './api/bureauRoutes.js';
import { resultRouter } from './api/resultRoutes.js';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Control-Origin-Opener-Policy', 'Same-origin-allow-popups');
    next();
});

app.use(express.json());
app.use(cors());

app.use('/api/v1/challenger', challengerRouter);
app.use('/api/v1/bureau', bureauRouter);
app.use('/api/v1/result', resultRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
