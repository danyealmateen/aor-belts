import express from 'express';
import { Barn, Knattar } from '../schema/schema';
const router = express.Router();

//barn
router.put('/barn/:id', async (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;

  console.log('PUT request received for barn:', id);

  try {
    const student = await Barn.findByIdAndUpdate(id, updatedStudent, {
      new: true,
    });

    if (!student) {
      res.status(404).json({ message: 'Barn not found' });
      return;
    }

    res.status(200).json({
      message: 'Student updated successfully:',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student' });
    console.log(error);
  }
});

//knattar
router.put('/knatte/:id', async (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;

  console.log('PUT request recieved for knatte', id);

  try {
    const student = await Knattar.findByIdAndUpdate(id, updatedStudent, {
      new: true,
    });
    if (!student) {
      res.status(404).json({ message: 'Knatte not found' });
      return;
    }
    res.status(200).json({
      message: 'Knatte updated successfully:',
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Knatte' });
    console.log(error);
  }
});

export default router;
