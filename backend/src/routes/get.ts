import express from "express";
import { Barn } from "../schema/schema";

const router = express.Router();

router.get("/barn", async (req, res) => {
  try {
    const barn = await Barn.find();
    res.json(barn);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
