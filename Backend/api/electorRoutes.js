// import { Router } from 'express';

// import { Elector } from 'model';

// const electorRouter = Router();

// //Post Method
// electorRouter.post('/post', async (req, res) => {
//     const data = new Elector(req.body)

//     try {
//         console.log(data)
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

// //Get all Method
// electorRouter.get('/getAll', async (req, res) => {
//     try{
//         const data = await Elector.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //Get by ID Method
// electorRouter.get('/getOne', async (req, res) => {
//     try{
//         const data = await Elector.findById(req.body.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //Update by ID Method
// electorRouter.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Elector.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// //Delete by ID Method
// electorRouter.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Elector.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// export { electorRouter};