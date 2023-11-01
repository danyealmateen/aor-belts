import express from 'express';
import { Student } from '../schema/schema';

const router = express.Router();

router.get('/show', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
