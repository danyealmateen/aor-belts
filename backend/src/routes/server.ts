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

const pathToBuildFolder = path.join(
  __dirname,
  '../../../frontend/fe-aor-belts/build'
);

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      'https://aor-belts-main.onrender.com',
      'http://localhost:3001',
      'http://localhost:3000',
    ],
  })
);

app.use(bodyParser.json());

app.use(express.static(pathToBuildFolder));

app.use('/api', studentRouter);

app.use('/api', getStudents);

app.use('/api', putRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(pathToBuildFolder, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});

connectToDatabase();
