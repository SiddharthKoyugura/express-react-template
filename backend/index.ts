import express, { Request, Response } from 'express';
import cors from 'cors';
import { retrieveAllRecords } from './db/utils';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
    res.json({message: "Hello"});
}) 

app.get('/getRecords', async(req: Request, res: Response)=>{
    try{
        const response = await retrieveAllRecords();
        res.json({response});
    }catch(e: any){
        console.log(e.message);
    }
})

app.listen(5000, ()=>{
    console.log('server running at port 5000');
})