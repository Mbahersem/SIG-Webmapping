import { Router } from 'express';

import { Challenger } from '../database/model/challenger';
const model = new Challenger()

const challengerRouter = Router();

//Post Method
challengerRouter.post('/post', async (req, res) => {

    try {
        model.addChallenger(req.body.name, req.body.birthDate, req.body.bureau, req.body.admin)

        res.status(200)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
challengerRouter.get('/getAll', async (req, res) => {
    try{

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
challengerRouter.get('/get/:id', async (req, res) => {
    try{
        const data = model.getChallenger(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

})

//Update by ID Method
challengerRouter.patch('/update/:id', async (req, res) => {
    try {

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
challengerRouter.delete('/delete/:id', async (req, res) => {
    try {
        model.deleteChallenger(req.params.id)
        res.send(`Document with ${req.params.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export { challengerRouter};