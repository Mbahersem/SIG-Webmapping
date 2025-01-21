import { Router } from 'express';

import { Bureau } from '../database/model/bureau.js';
const model = new Bureau()

const bureauRouter = Router();


//Get all Method
bureauRouter.get('/getAll', async (req, res) => {
    try{
        let data = await model.getBureaux()
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

export {bureauRouter}