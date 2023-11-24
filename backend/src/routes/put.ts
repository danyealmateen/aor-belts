import express from 'express';
import { Student, Knatte } from '../schema/schema';

const router = express.Router();

//barn
router.put('/students/:id', async (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;
  console.log('detta är req.body:', req.body);

  try {
    const student = await Student.findByIdAndUpdate(id, updatedStudent, {
      new: true,
    });

    if (!student) {
      console.log(student);
      res.status(404).json({
        message: 'Student not found',
        idRecieved: id,
        bodyRecieved: updatedStudent,
      });
      return;
    }

    res.status(200).json({
      message: 'Student updated successfully:',
      data: student,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error updating student',
        idRecieved: id,
        bodyRecieved: updatedStudent,
      });
    console.log(error);
  }
});

//knatte
router.put('/knattar/:id', async (req, res) => {
  const id = req.params.id;
  const updatedKnatte = req.body;

  try {
    const knatte = await Knatte.findByIdAndUpdate(id, updatedKnatte, {
      new: true,
    });

    if (!knatte) {
      res.status(404).json({ message: 'Knatte not found' });
      return;
    }

    res.status(200).json({
      message: 'Knatte updated successfully:',
      data: knatte,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating knatte' });
    console.log(error);
  }
});

export default router;
