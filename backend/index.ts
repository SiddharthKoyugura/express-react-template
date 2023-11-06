import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
    res.json({message: "Hello world"});
})

app.get('/getRecords', async(req: Request, res: Response)=>{
    try{
        const response = await pool.query("SELECT * FROM todo");
        res.json({response: response.rows});
    }catch(e: any){
        console.log(e.message);
    }
})


app.listen(5000, ()=>{
    console.log('server running at port 5000');
})