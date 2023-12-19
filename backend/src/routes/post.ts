import express from "express";
import { Barn } from "../schema/schema";

const router = express.Router();

router.post("/barn", async (req, res) => {
  try {
    const newStudent = new Barn(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
