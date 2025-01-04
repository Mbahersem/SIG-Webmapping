import express from 'express';
import cors from 'cors';

import { challengerRouter } from './api/challengerRoutes';
import { electorRouter } from './api/electorRoutes';
import { resultRouter } from './api/resultRoutes';

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/v1/challenger', challengerRouter);
app.use('/api/v1/elector', electorRouter);
app.use('/api/v1/result', resultRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})