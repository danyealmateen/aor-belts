import express from 'express';
import { Barn } from '../schema/schema';
const router = express.Router();

router.put('/barn/:id', async (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;

  try {
    const student = await Barn.findByIdAndUpdate(id, updatedStudent, {
      new: true,
    });

    if (!student) {
      res.status(404).json({ message: 'Student not found' });
      return;
    }

    res.status(200).json({
      message: 'Student updated successfully:',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student' });
  }
});

export default router;
