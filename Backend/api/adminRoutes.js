import { Router } from 'express';

import { Administrator } from '../database/model/administrator.js';
const model = new Administrator()

const adminRouter = Router();

//Post Method
adminRouter.post('/post', async (req, res) => {

    try {
        await model.addAdministrator(req.body.name, req.body.birthDate)

        res.status(200)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get by ID Method
adminRouter.get('/get/:id', async (req, res) => {
    try{
        const data = await model.getAdministrator(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

})


//Delete by ID Method
adminRouter.delete('/delete/:id', async (req, res) => {
    try {
        await model.deleteAdministrator(req.params.id)
        res.send(`Document with ${req.params.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export { adminRouter};