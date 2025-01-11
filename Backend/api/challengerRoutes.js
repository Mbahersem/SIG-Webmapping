import { Router } from 'express';

import { Challenger } from 'model';

const challengerRouter = Router();

//Post Method
challengerRouter.post('/post', async (req, res) => {
    const data = new Challenger(req.body)

    try {
        console.log(data)
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
challengerRouter.get('/getAll', async (req, res) => {
    try{
        const data = await Challenger.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
challengerRouter.get('/getOne', async (req, res) => {
    try{
        const data = await Challenger.findById(req.body.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
challengerRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Challenger.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
challengerRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Challenger.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export { challengerRouter};