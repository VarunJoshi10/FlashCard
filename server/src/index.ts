import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Deck from './models/Deck';

const PORT=5000;
const app = express();

app.use(express.json());


app.post('/decks', async(req: Request, res: Response) => {
    console.log(req.body);
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createDeck=await newDeck.save();
    res.json(createDeck)
});

mongoose.connect('mongodb+srv://varunjoshi12363:varun123@cluster0.rlvhf3d.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log(`Listerning on port ${PORT}`);
    app.listen(PORT);
})
