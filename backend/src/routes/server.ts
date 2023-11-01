import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDatabase from '../db/db';
import studentRouter from './post';
import getStudents from './get';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

app.use(cors());

app.use(bodyParser.json());

app.use('/api', studentRouter);

app.use('/api', getStudents);

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});

connectToDatabase();
