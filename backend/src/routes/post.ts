import express from 'express';
import { Student } from '../schema/schema';

const router = express.Router();

router.post('/students', async (req, res) => {
  try {
    const students = await Student.insertMany(req.body);
    res.status(201).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
