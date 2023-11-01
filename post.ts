import express from 'express';
import { Student } from './schema';

const router = express.Router();

router.post('/student', async (req, res) => {
  try {
    console.log('req.body:', req.body);
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
