import { Router } from 'express';

import { Candidate } from '../database/model/candidate.js';
const model = new Candidate()

const candidateRouter = Router();

//Post Method
candidateRouter.post('/post', async (req, res) => {

    try {
        await model.addCandidate(req.body.party, req.body.name)

        res.status(200)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
candidateRouter.get('/getAll', async (req, res) => {
    try{
        data = await model.getCandidates()
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
candidateRouter.get('/get/:id', async (req, res) => {
    try{
        const data = await model.getCandidate(req.params.id)
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

})

//Update by ID Method
candidateRouter.patch('/update/:id', async (req, res) => {
    try {
        await model.changeCandidate(req.params.id, req.body.name)
        res.status(200)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// //Delete by ID Method
// candidateRouter.delete('/delete/:id', async (req, res) => {
//     try {
//         model.deleteChallenger(req.params.id)
//         res.send(`Document with ${req.params.id} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

export { candidateRouter};