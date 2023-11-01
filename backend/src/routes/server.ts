import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDatabase from '../db/db';
import studentRouter from './post';
import getStudents from './get';
import putRoute from './put';
import path from 'path';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: 'https://aor-belts-main.onrender.com' }));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../frontend/fe-aor-belts/build'));

app.use('/api', studentRouter);

app.use('/api', getStudents);

app.use('/api', putRoute);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/../frontend/fe-aor-belts/build/index.html');
});

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});

connectToDatabase();
