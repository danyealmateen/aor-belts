import express from 'express';
import { Barn, Knattar } from '../schema/schema';

const router = express.Router();

router.get('/barn', async (req, res) => {
  try {
    const barn = await Barn.find();
    res.json(barn);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get('/knatte', async (req, res) => {
  try {
    const knattar = await Knattar.find();
    res.json(knattar);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
