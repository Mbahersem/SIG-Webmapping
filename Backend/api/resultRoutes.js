import { Router } from 'express';

import { sendData } from './socketStreamManager.js';

import { CountBureauPerParty } from '../database/model/countBureauPerParty.js';
const model = new CountBureauPerParty(); 

const resultRouter = Router();

resultRouter.post('/post/:bureau', async (req, res) => {
    const data = null;

    try {

       dataSaved =  await model.countVotes(req.params.bureau, req.body.party, req.body.count)

        res.status(200).json(dataSaved)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

resultRouter.get('/getAll', async (req, res) => {
    try{
        const data = null;
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

export {resultRouter}