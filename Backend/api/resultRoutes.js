import { Router } from 'express';

import { sendData } from './socketStreamManager';

const resultRouter = Router();

resultRouter.post('/post', async (req, res) => {
    const data = null;

    try {
        const dataToSave = await data.save();

        sendData(data)

        res.status(200).json(dataToSave)
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