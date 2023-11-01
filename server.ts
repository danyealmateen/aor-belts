import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase from './db';
import studentRouter from './post';
import getStudents from './get';

const app = express();
const PORT = 3000;
dotenv.config();

app.use(bodyParser.json());

app.use('/api', studentRouter);

app.use('/api', getStudents);

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});

connectToDatabase();
